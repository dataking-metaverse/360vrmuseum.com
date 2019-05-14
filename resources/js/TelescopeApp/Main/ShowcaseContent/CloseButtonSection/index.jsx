import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import {emptyShowcase} from "../../../redux/actionCreators";
import CloseButton from "../../../components/CloseButton";


const marginButtom = R.path(['theme', 'showcaseContent', 'closeButtonSection', 'marginButtom']);
const Root = styled.div`
    text-align: right;
    margin-bottom: ${marginButtom}rem;
`;


function CloseButtonSection(props: Props) {
    return (
        <Root>
            <CloseButton onClick={props.emptyShowcase} />
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({}),
        R.applySpec({emptyShowcase})
    )
)(CloseButtonSection);
