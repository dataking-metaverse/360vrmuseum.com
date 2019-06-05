import React, {useState} from "react";
import * as R from "ramda";

import params from "~/helpers/params";
import useRoute from "~/hooks/useRoute";
import useReduxAction from "~/hooks/useReduxAction";
import {pushRedirect as pushRedirectAction} from "~/redux/actionCreators/global";
import Context from "./Context";
import Input from "./Input";
import Submit from "./Submit";

import type {Element} from "react";

type SubmitFunction = (search: string) => void;

type Props = {|
    children: (onSubmit: SubmitFunction) => Element,
|};

export default function SearchSupplier(props: Props) {
    const pushRedirect = useReduxAction(pushRedirectAction);
    const [input, setInput] = useState<string>('');
    const searchRoute = useRoute('search');

    const onSubmit = (event: Event) => {
        const searchQuery = params({q: input});
        pushRedirect(`${searchRoute}?${searchQuery}`);
    };

    const onInput = R.pipe(
        R.path(['target', 'value']),
        R.when(
            R.is(String),
            setInput,
        )
    );

    return (
        <Context.Provider value={{onSubmit, onInput}}>
            {props.children}
        </Context.Provider>
    );
};

export {
    Context,
    Input,
    Submit,
};

SearchSupplier.Context = Context;
SearchSupplier.Input = Input;
SearchSupplier.Submit = Submit;