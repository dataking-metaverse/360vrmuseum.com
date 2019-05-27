import React from "react";
import * as R from "ramda";

import {Root, Header, Body} from "./styled";

import {Node} from "react";

type Props = {|
    header: Node,
    noPadding: boolean,
    children: Node,
|};

const bodyOptions = R.pick(['noPadding']);

export default function Card(props: Props) {
    return (
        <Root>
            <Header>{props.header}</Header>
            <Body {...bodyOptions(props)}>{props.children}</Body>
        </Root>
    );
}
