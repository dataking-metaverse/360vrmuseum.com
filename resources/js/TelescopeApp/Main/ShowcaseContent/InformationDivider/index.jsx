import React from "react";
import styled from "styled-components";

import type {Node} from "react";

type Props = {|
    children: Node,
|};

const Table = styled.div`
    display: table;
`;

const Col = styled.div`
    display: table-cell;
`;

const LeftCol = styled(Col)`
    width: 58rem;
`;

const SpaceCol = styled(Col)`
    width: 9.7rem;
`;

const RightCol = styled(Col)`

`;

export default function InformationDivider(props: Props) {
    const [left, right] = React.Children.toArray(props.children);

    return (
        <Table>
            <LeftCol>{left}</LeftCol>
            <SpaceCol />
            <RightCol>{right}</RightCol>
        </Table>
    );
};
