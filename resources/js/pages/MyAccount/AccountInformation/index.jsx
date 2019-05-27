import React, {useState} from "react";

import Card from "../../../components/Card";
import useLangPath from "../../../hooks/useLangPath";
import {Provider} from "./AccountEditStateContext";
import AccountInformationHeader from "./AccountInformationHeader";
import AccountInformationItem from "./AccountInformationItem";

type Props = {|

|};

export default function AccountInformation(props: Props) {
    const common = useLangPath(['common']);
    const editState: [boolean, (newState: boolean) => void] = useState(false);
    const [isEdit] = editState;
    return (
        <Provider value={editState}>
            <Card header={<AccountInformationHeader />} noPadding>
                <AccountInformationItem />
            </Card>
        </Provider>
    );
};
