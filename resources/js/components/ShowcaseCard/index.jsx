import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {rgba} from "polished";
import {Link} from "react-router-dom";

import Showcase from "../../models/Showcase";
import {percentage, themeVar} from "../../styling/theme/functions";


type Props = {
    showcase: Showcase,
    quickView: string,
    impressionsText: string,
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

const QuickView = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 17% 0;
    letter-spacing: 1rem;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    transform: translate(-50%, -50%);
    text-decoration: none;
    transition: opacity .5s;
    z-index: 1;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

const Type = styled.div`
    font-size: 1.3rem; 
    color: #4A0087;
    cursor: default;
`;

const titleLineHeight = 1.4;
const Title = styled.h3`
    margin-top: .4em;
    min-height: ${titleLineHeight * 2}em;
    line-height: ${titleLineHeight};
    cursor: pointer;
    white-space: pre-wrap;
    font-size: .8em;
    
    &:first-line {
        font-size: initial;
    }
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
    margin-bottom: 1rem;
    cursor: default;
`;

const Impression = styled.span`
    font-size: 1.2rem;
    color: rgb(116, 116, 116);
    cursor: default;
`;

const ViewDetails = styled(Link)`
    color: ${themeVar('colors.basic.purple')};
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
    }
`;

const DetailWrapper = styled.div`
    padding: 1.5rem;
`;

function ShowcaseCard(props: Props) {
    const {showcase, text, quickView, impressionsText} = props;
    const {
        thumbnail,
        type,
        main_title: mainTitle,
        location,
        presented_by: presentedBy,
        date,
        statistics,
    } = showcase.props;
    const showcaseRoute = showcase.route();
    return (
        <Root>
            <Image image={thumbnail}>
                <QuickView to={showcaseRoute}>{quickView}</QuickView>
            </Image>
            <DetailWrapper>
                <Type>{type}</Type>
                <Title>{mainTitle}</Title>
                <PresentedBy>{location}{', '}{presentedBy}</PresentedBy>
                <Period>{date}</Period>
                <hr />
                <Row>
                    <Col col={6}>
                        <Impression>{impressionsText} {statistics.impressions}</Impression>
                    </Col>
                    <Col col={6} className="text-right">
                        <ViewDetails to={showcaseRoute}>{text.viewDetails}{' >'}</ViewDetails>
                    </Col>
                </Row>
            </DetailWrapper>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'home', 'specialExhibition']),
            quickView: R.path(['lang', 'common', 'quickView']),
            impressionsText: R.path(['lang', 'common', 'impressions']),
        }),
        R.applySpec({}),
    )
)(ShowcaseCard);
