import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import classNames from "classnames";

import smokeyBackground from "../../../decorators/smokeyBackground";

import type {ResponsiveImage} from "../../../assets";
import makeSrcset from "../../../helpers/makeSrcset";
import {themeVar} from "../../../styling/theme/functions";
import FadeInComponent from "../../../components/FadeInComponent";


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

const Image = styled.img`
    max-width: 100%;
`;

const stickOn = (leftThen, rightThen) => R.ifElse(R.pathEq(['stickOn'], 'left'), R.always(leftThen), R.always(rightThen));
const TextWrap = styled.div`
    position: absolute;
    top: 50%;
    ${stickOn('left: 0;', 'right: 0;')}
    ${stickOn('text-align: left;', 'text-align: right;')}
    width: 36.4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    max-width: 100%;
    transform: translateY(-50%);
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
    return (
        <Row className={classNames('mb-5', { 'flex-row-reverse': props.index % 2 !== 0 })}>
            <Col xl="2">&nbsp;</Col>
            <Col xl="5">
                <FadeInComponent>
                    <Image src={image.src} srcSet={makeSrcset(image.srcSetObject)} />
                </FadeInComponent>
            </Col>
            <Col xl="5">
                    <TextWrap stickOn={props.index % 2 === 0 ? 'left' : 'right'}>
                        <FadeInComponent delay={200}>
                            <div>
                                <Title>{props.title}</Title>
                                <Description>{props.description}</Description>
                            </div>
                        </FadeInComponent>
                    </TextWrap>
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
