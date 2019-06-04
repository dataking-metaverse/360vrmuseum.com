import React, {useState, useMemo} from "react";
import {Redirect} from "react-router";

import params from "~/helpers/params";
import useRoute from "~/hooks/useRoute";

import type {Element} from "react";

type SubmitFunction = (search: string) => void;

type Props = {|
    children: (submit: SubmitFunction) => Element,
|};


export default function SearchSupplier(props: Props) {
    const [searchUrl, setSearchUrl] = useState<?string>(null);
    const searchRoute = useRoute('search');
    const submit = useMemo<SubmitFunction>(() => (search: string) => {
        const searchQuery = params({q: search});
        setSearchUrl(`${searchRoute}?${searchQuery}`);
    });
    return (
        <>
            {searchUrl && <Redirect searchUrl={searchUrl} />}
            {props.children(submit)}
        </>
    );
};
