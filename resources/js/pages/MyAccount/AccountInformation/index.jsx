import React, {useState, createRef} from "react";
import * as R from "ramda";

import Card from "~/components/Card";
import LoadingSpinner from "~/components/LoadingSpinner";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import AccountEditStateContext from "./AccountEditStateContext";
import Header from "./AccountInformationHeader";
import Form from "./AccountInformationForm";

import type {Ref} from "react";
import type {Props as UserProps} from "~/models/User"

type Props = {|

|};

const useApiUrl = R.pipe(
    R.always('api.my-account.account-information'),
    useRoute,
);

const useUserProps = R.pipe(
    useApiUrl,
    useAxios,
    R.prop('data')
);

export default function AccountInformation(props: Props) {
    const editState: [boolean, (newState: boolean | function) => void] = useState<boolean>(false);
    const [, setIsEdit] = editState;
    const user: UserProps | null = useUserProps();
    const formRef: Ref = createRef();

    function onSaveButtonClick(): void {
        const form = formRef.current;
        if (form) { form.save(); }
    }

    return (
        <AccountEditStateContext.Provider value={editState}>
            <Card header={<Header onSaveButtonClick={onSaveButtonClick} />}>
                {user ? <Form ref={formRef} user={user} onSubmitDone={() => setIsEdit(false)} /> : <LoadingSpinner transparentBackground />}
            </Card>
        </AccountEditStateContext.Provider>
    );
};
