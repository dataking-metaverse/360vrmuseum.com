import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import useReduxAction from "../../../hooks/useReduxAction";
import {emptyShowcase as emptyShowcaseAction} from "../../../redux/actionCreators";
import CloseButton from "../../../components/CloseButton";


const marginButtom = R.path(['theme', 'showcaseContent', 'closeButtonSection', 'marginButtom']);
const Root = styled.div`
    text-align: right;
    margin-bottom: ${marginButtom}rem;
`;

type Props = {|

|};


export default function CloseButtonSection(props: Props) {
    const emptyShowcase = useReduxAction(emptyShowcaseAction);
    return (
        <Root>
            <CloseButton onClick={emptyShowcase} />
        </Root>
    );
}
