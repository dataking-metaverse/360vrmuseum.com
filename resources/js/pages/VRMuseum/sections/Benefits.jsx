import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import classNames from "classnames";

import smokeyBackground from "../../../decorators/smokeyBackground";

import type {ResponsiveImage} from "../../../assets";
import makeSrcset from "../../../helpers/makeSrcset";
import {themeVar} from "../../../styling/theme/functions";
import faded from "../../../helpers/faded";


type Props = {
    text: Array<{ title: string, description: string }>,
    images: Array<ResponsiveImage>,
};

type RowsProps = {
    title: string,
    description: string,
    image: ResponsiveImage,
    index: number,
};

const Root = styled.div``;

const Image = faded('img')`
    max-width: 100%;
`;

const stickOn = (leftThen, rightThen) => R.ifElse(R.pathEq(['stickOn'], 'left'), R.always(leftThen), R.always(rightThen));
const TextWrap = faded('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    
    ${media.md`
        padding-left: 4rem;
        padding-right: 4rem;
        width: 36.4rem;
        ${stickOn('', 'margin-left: auto;')}
        ${stickOn('', 'margin-right: 0;')}
        ${stickOn('text-align: left;', 'text-align: right;')}
    `}
`;

const Description = styled.p`
    
`;

const Title = styled.div`
    color: ${themeVar('colors.basic.darkerPurple')};
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 700;
`;


function BenefitRow(props: RowsProps) {
    const {image} = props;
    const isOdd = props.index % 2 !== 0;
    return (
        <Row className={classNames('mb-5', {'flex-md-row-reverse': !isOdd })} justifyContent="center" mdJustifyContent="start">
            <Col sm="10" md="6" lg="5">
                <TextWrap stickOn={!isOdd ? 'left' : 'right'} delay={200}>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                </TextWrap>
            </Col>
            <Col sm="10" md="6" lg="5">
                <Image src={image.src} srcSet={makeSrcset(image.srcSetObject)} />
            </Col>
        </Row>
    );
}

function Benefits(props: Props) {
    const {text, images} = props;
    return (
        <Root>
            <Container className="mb-5 py-5">
                {text.map((item, index) => (
                    <BenefitRow
                        key={index}
                        {...item}
                        image={images[index]}
                        index={index}
                    />
                ))}
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'benefits']),
        images: R.path(['assets', 'vrmuseum', 'benefits']),
    })),
    smokeyBackground
)(Benefits);
