import React, {useState} from "react";
import styled from "styled-components";
import * as R from "ramda";

import Card from "~/components/Card";
import useReduxState from "~/hooks/useReduxState";
import {Provider} from "./AccountEditStateContext";
import AccountInformationHeader from "./AccountInformationHeader";
import AccountInformationItem from "./AccountInformationItem";

import type {Props as UserProps} from "~/models/User"

type Props = {|

|};

const CardBodyInner = styled.div`
    padding-left: 9.8rem;
`;

const useUserProps = R.pipe(
    useReduxState,
    R.path(['user', 'props']),
    R.tap(console.log)
);

export default function AccountInformation(props: Props) {
    const editState: [boolean, (newState: boolean) => void] = useState<boolean>(false);
    const user: UserProps = useUserProps();
    return (
        <Provider value={editState}>
            <Card header={<AccountInformationHeader />} noPadding>
                <CardBodyInner>
                    <AccountInformationItem />
                </CardBodyInner>
            </Card>
        </Provider>
    );
};
