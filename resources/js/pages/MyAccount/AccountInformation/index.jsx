import React, {useState} from "react";
import * as R from "ramda";

import Card from "~/components/Card";
import LoadingSpinner from "~/components/LoadingSpinner";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import {Provider} from "./AccountEditStateContext";
import AccountInformationHeader from "./AccountInformationHeader";

import type {Props as UserProps} from "~/models/User"
import AccountInformationForm from "./AccountInformationForm";

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
    return (
        <Provider value={editState}>
            <Card header={<AccountInformationHeader />} noPadding>
                {user ? <AccountInformationForm user={user} /> : <LoadingSpinner transparentBackground />}
            </Card>
        </Provider>
    );
};
