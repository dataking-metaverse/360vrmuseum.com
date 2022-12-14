import React, {useContext} from "react";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import Showcase from "../../models/Showcase";
import ShowcaseSectionTitle from "./components/ShowcaseSectionTitle";
import GoogleMaps from "./components/GoogleMaps";
import YouTubeVideo from "../../components/YouTubeVideo";
import instanceOf from "../../helpers/instanceOf";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseContainer from "./ShowcaseContainer";


type Props = {|
    text: {
        location: {|
            title: string,
        |},
        introductionVideo: {|
            title: string,
        |},
    },
|};

type YouTubeColProps = {|
    title: string,
    id?: string,
|};


function YouTubeCol(props: YouTubeColProps) {
    const {title, id} = props;
    if (!id) { return null; }
    return (
        <Col col={12} lg={6}>
            <ShowcaseSectionTitle>{title}</ShowcaseSectionTitle>
            <YouTubeVideo v={id} />
        </Col>
    );
}

function ShowcaseDetails(props: Props) {
    const {text} = props;
    const showcase = useContext(ShowcaseContext);
    const {location, introductionVideo} = text;

    if (!instanceOf(Showcase, showcase)) { return null; }
    const {
        map_address: address,
        map_name: title,
    } = showcase.props;

    return (
        <ShowcaseContainer className="mb-5">
            <Row>
                <Col col={12} lg={6}>
                    <ShowcaseSectionTitle>{location.title}</ShowcaseSectionTitle>
                    <GoogleMaps title={title} address={address} />
                </Col>
                <YouTubeCol title={introductionVideo.title} id={showcase.getAttribute('youtube_id')} />
            </Row>
            <hr />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'details']),
        })
    )
)(ShowcaseDetails);
