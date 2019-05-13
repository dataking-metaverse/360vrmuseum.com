import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import {scopeLogo} from "../../assets";
import Scrollable from "../../components/Scrollable";
import MuseumIndex from "../MuseumIndex";
import {
    Header,
    Logo,
} from "./styled";

type Props = {|

|};

const widthFull = R.path(['theme', 'showcaseMenu', 'widthFull']);
const widthCollapse = R.path(['theme', 'showcaseMenu', 'widthCollapse']);
const width = R.ifElse(
    R.prop('wide'),
    widthFull,
    widthCollapse
);


const Root = styled.div`
    width: ${width}rem;
`;

export default function ShowcaseMenu(props: Props) {
    return (
        <Root wide={true}>
            <Scrollable>
                <Header>
                    <Logo src={scopeLogo} />
                </Header>
                <MuseumIndex />
            </Scrollable>
        </Root>
    );
};
