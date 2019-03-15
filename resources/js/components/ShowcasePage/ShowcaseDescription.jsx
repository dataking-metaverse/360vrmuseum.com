import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import instanceOf from "../../helpers/instanceOf";
import Showcase from "../../models/Showcase";
import LoadingSpinner from "../LoadingSpinner";
import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";
import SlideComponent from "../SlideComponent";


type Props = {|
    text: {
        program: string,
    },
|};

const Description = styled.pre`
    white-space: pre-wrap;
    font-family: inherit;
`;

function ShowcaseDescription(props: Props) {
    const {text} = props;
    const showcase = useContext(ShowcaseContext);
    const [guideOpen, setGuideOpen] = useState(false);

    const attrs = instanceOf(Showcase, showcase) ? showcase.toObject() : null;
    if (!attrs) { return ( <LoadingSpinner /> ); }

    const {
        description,
        guide_information: guideInformation
    } = attrs;

    return (
        <ShowcaseContainer>
            <Description>{description}</Description>
            <button onClick={() => setGuideOpen(!guideOpen)}>{text.program}</button>
            <SlideComponent open={guideOpen}>
                <div dangerouslySetInnerHTML={{__html: guideInformation}} />
            </SlideComponent>
            <br /><br />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'description'])
        }),
        R.always({})
    )
)(ShowcaseDescription);
