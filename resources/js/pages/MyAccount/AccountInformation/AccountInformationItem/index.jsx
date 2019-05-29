import React from "react";

import {
    Root, Table, Cell,
} from "./styled";

type Props = {|
    title: string,
    name: string,
    value?: string,
|};

export default function AccountInformationItem(props: Props) {
    return (
        <Root>
            <Table>
                <Cell style={{width: '7.1rem'}}>
                    {props.title}
                </Cell>
                <Cell>
                    sdafjsdajfld
                </Cell>
            </Table>
        </Root>
    );
};

