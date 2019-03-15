import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";

import instanceOf from "../../helpers/instanceOf";
import Showcase from "../../models/Showcase";
import LoadingSpinner from "../LoadingSpinner";
import ShowcaseSectionTitle from "./components/ShowcaseSectionTitle";
import ShowcaseSectionSubtitle from "./components/ShowcaseSectionSubtitle";
import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";


type Props = {|
    text: {
        title: string,
        subtitle: string,
    },
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


function Images(props: ImagesProps) {
    const showcase = useContext(ShowcaseContext);
    if (!instanceOf(Showcase, showcase)) { return <Col><LoadingSpinner /></Col>; }
    return showcase.getAttribute('list_of_images').map(url => (
        <Col key={url} lg={4}>
            <Image src={url}><LoadingSpinner cover /></Image>
            <br />
        </Col>
    ));
}

function ShowcaseImages(props: Props) {
    const {text} = props;
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            <ShowcaseSectionSubtitle>{text.subtitle}</ShowcaseSectionSubtitle>
            <Row>
                <Images />
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
