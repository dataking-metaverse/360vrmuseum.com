import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";

import Showcase from "../../models/Showcase";
import {percentage} from "../../styling/theme/functions";


type Props = {
    showcase: Showcase,
    text: {|
        viewDetails: string,
    |},
};

const Root = styled.div`
    
`;

const Image = styled.div`
    background-color: black; // TEMP
    background-image: url(${R.prop('image')});
    background-size: cover;
    background-position: 50% 50%;

    &:before {
        content: '';
        display: block;
        padding-top: ${percentage(237 / 416)};
    }
`;

const Type = styled.div`
    
`;

const Title = styled.h3`

`;

const PresentedBy = styled.div`

`;

const Period = styled.div`
    
`;

const Impression = styled.div`
    
`;

const ViewDetails = styled.a`
    
`;


function ShowcaseCard(props: Props) {
    const {showcase} = props;
    const {
        thumbnail,
        type,
        main_title: mainTitle,
        presented_by: presentedBy,
        date,
    } = showcase.props;
    return (
        <Root>
            <Image image={thumbnail} />
            <Type>{type}</Type>
            <Title>{mainTitle}</Title>
            <PresentedBy>{presentedBy}</PresentedBy>
            <Period>{date}</Period>
            <hr />
            <Impression>TODO</Impression>
            <ViewDetails>{text.viewDetails}</ViewDetails>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', '']),
        }),
        R.applySpec({}),
    )
)(ShowcaseCard);
