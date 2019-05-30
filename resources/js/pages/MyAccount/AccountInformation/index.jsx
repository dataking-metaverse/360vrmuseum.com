import React, {useState, createRef} from "react";
import * as R from "ramda";

import Card from "~/components/Card";
import LoadingSpinner from "~/components/LoadingSpinner";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import AccountEditStateContext from "./AccountEditStateContext";
import AccountInformationHeader from "./AccountInformationHeader";
import AccountInformationForm from "./AccountInformationForm";

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
    const editState: [boolean, (newState: boolean) => void] = useState<boolean>(false);
    const user: UserProps = useUserProps();
    const formRef: Ref = createRef();

    function onSaveButtonClick(): void {
        const form = formRef.current;
        if (form) {
            form.save();
        }
    }

    return (
        <AccountEditStateContext.Provider value={editState}>
            <Card header={<AccountInformationHeader onSaveButtonClick={onSaveButtonClick} />} noPadding>
                {user ? <AccountInformationForm ref={formRef} user={user} /> : <LoadingSpinner transparentBackground />}
            </Card>
        </AccountEditStateContext.Provider>
    );
};
