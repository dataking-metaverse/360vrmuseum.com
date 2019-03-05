import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {percentage, themeVar} from "../../../styling/theme/functions";


type Props = {
    title: string,
    percentage: number,
    barColor: ?string,
};

const Title = styled.div`
    color: ${themeVar('colors.basic.darkerPurple')};
    font-size: 1.2rem;
    line-height: 2;
`;

const BarBackground = styled.div`
    position: relative;
    height: 3rem;
    width: 48.8rem;
    max-width: 100%;
    border-radius: .2rem;
    background-color: rgba(119,109,119,.08);
    margin-bottom: 2rem;
`;


const Bar = styled.div`
    position: relative;
    width: ${R.path(['percentageText'])};
    height: 100%;
    background-color: ${R.path(['color'])};
    border-radius: inherit;
    text-align: right;
    
    &:after {
        content: '${R.path(['percentageText'])}';
        position: absolute;
        display: block;
        top: 50%;
        right: 0;
        font-size: 1.1rem;
        line-height: 1;
        color: ${themeVar('colors.basic.white')};
        padding-right: 1.5rem;
        margin-top: -.5em;
    }
`;


function PercentageBar(props: Props) {
    const percentageText = percentage(Math.round(props.percentage * 100));
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <BarBackground>
                <Bar percentageText={percentageText} color={props.barColor} />
            </BarBackground>
        </React.Fragment>
    );
}

export default PercentageBar;
