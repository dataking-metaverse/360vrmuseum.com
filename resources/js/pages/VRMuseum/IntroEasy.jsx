import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";

import TitleAndIntro from "./TitleAndIntro";
import smokeyBackground from "../../decorators/smokeyBackground";


type Props = {
    text: {
        title: string,
        intro: string,
    },
};

function IntroEasy(props: Props) {
    const {text} = props;
    return (
        <Row>
            <Col xl="6">
                <TitleAndIntro
                    html
                    title={text.title}
                    intro={text.intro}
                />
            </Col>
            <Col xl="6">
                image
            </Col>
        </Row>
    );
}

export default R.compose(
    smokeyBackground,
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'introEasy']),
    }))
)(IntroEasy);
