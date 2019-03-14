import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";

import Showcase from "../../models/Showcase";
import {percentage} from "../../styling/theme/functions";
import {rgba} from "polished";


type Props = {
    showcase: Showcase,
    text: {|
        viewDetails: string,
    |},
};

const Root = styled.div`
    background-color: white;
    border-radius: 0.4rem;
`;

const Image = styled.div`
    position: relative;
    background-image: url(${R.prop('image')});
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 2rem;

    &:before {
        content: '';
        display: block;
        padding-top: ${percentage(100 * 237 / 416)};
    }
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${rgba('#1f101f', .3)};
        opacity: 0;
        transition: opacity .4s;
    }
    
    &:hover:after {
        opacity: 1;
    }
`;

const QuickView = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 17% 0;
    letter-spacing: 1rem;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity .5s;
    z-index: 1;
    
    &:hover {
        opacity: 1;
    }
`;

const Type = styled.div`
    font-size: 1.3rem; 
    color: rgb(74, 0, 135);
    cursor: default;
`;

const Title = styled.h3`
    height: 6rem;
    margin-top: 1rem;
    cursor: pointer;
`;

const PresentedBy = styled.div`
    font-size: 1.5rem;
    color: rgba(40, 40, 40, 0.91);
    margin-bottom: 1rem;
    cursor: default;
`;

const Period = styled.div`
    color: rgb(153, 153, 153);
    font-size: 1.2rem;
    margin-bottom: 2rem;
    cursor: default;
`;

const Impression = styled.span`
    font-size: 1.3rem;
    color: rgb(116, 116, 116);
    cursor: default;
`;

const ViewDetails = styled.a`
    color: #530d5e;
    transition: all .5s;
    cursor: pointer;
    font-size: 1.2rem;
    float: right;

    &:hover {
        transform: scale(1.1);
    }
`;

const DetailWrapper = styled.div`
    padding: 10rem 4.5rem 3rem;
`;

function ShowcaseCard(props: Props) {
    const {showcase, text, quickView} = props;
    const {
        thumbnail,
        type,
        main_title: mainTitle,
        presented_by: presentedBy,
        date,
    } = showcase.props;

    return (
        <Root>
            <Image image={thumbnail}>
                <QuickView>{quickView}</QuickView>
            </Image>
            <DetailWrapper>
                <Type>{type}</Type>
                <Title>{mainTitle}</Title>
                <PresentedBy>{presentedBy}</PresentedBy>
                <Period>{date}</Period>
                <hr className="mb-5"/>
                <div>
                    <Impression>TODO</Impression>
                    <ViewDetails href="#">{text.viewDetails}{' >'}</ViewDetails>
                </div>
            </DetailWrapper>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'home', 'specialExhibition']),
            quickView: R.path(['lang', 'pages', 'home', 'heroCarousel', 'linkText']),
        }),
        R.applySpec({}),
    )
)(ShowcaseCard);
