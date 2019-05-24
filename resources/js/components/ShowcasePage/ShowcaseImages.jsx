import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";

import Showcase from "../../models/Showcase";
import LoadingSpinner from "../LoadingSpinner";
import ShowcaseSectionTitle from "./components/ShowcaseSectionTitle";
import ShowcaseSectionSubtitle from "./components/ShowcaseSectionSubtitle";
import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";

import type {ComponentType} from "react";


type Props = {|
    text: {
        title: string,
        subtitle: string,
    },
|};

type ImagesProps = {|
    images: {|
        original: string,
        thumb: string,
    |},
|};

type ImageProps = {|
    image: string,
|};

const Image = styled.div`
    position: relative;
    border: 2px solid #aaaaaa;
    
    &:after {
        position: relative;
        content: '';
        display: block;
        padding-top: 56.25%;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${R.prop('src')});
        z-index: 1;
    }
`;

const Images = R.pipe<ImagesProps, Array<ComponentType<ImageProps>>>(
    R.prop('images'),
    R.pluck('thumb'),
    R.map((image: string) => (
        <Col key={image} sm={6} lg={4}>
            <Image src={image}><LoadingSpinner cover /></Image>
            <br />
        </Col>
    ))
);

function ShowcaseImages(props: Props) {
    const {text} = props;
    const showcase: Showcase = useContext(ShowcaseContext);
    if (showcase === null) { return null; }
    const images = showcase.getAttribute('list_of_images');
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            <ShowcaseSectionSubtitle>{text.subtitle.replace('{amount}', images.length)}</ShowcaseSectionSubtitle>
            <Row>
                <Images images={images} />
            </Row>
            <hr />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'images']),
        }),
        R.always({})
    )
)(ShowcaseImages);
