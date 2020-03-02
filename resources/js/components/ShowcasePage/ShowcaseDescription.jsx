import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import instanceOf from "../../helpers/instanceOf";
import Showcase from "../../models/Showcase";
import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";
import SlideComponent from "../SlideComponent";


type Props = {|
    text: {
        program: string,
    },
|};

const Description = styled.pre`
    color: #7a7a7a;
    white-space: pre-wrap;
    font-family: inherit;
    font-size: 1.5rem;
    line-height: 2.2rem;
`;

const ButtonWrapper = styled.div`
    text-align: right;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    margin-top: 4rem;
    color: ${({open}) => open ? 'rgba(111, 3, 198, 0.7)' : 'rgba(83,13,94,.7)'};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1em;
    background-color: transparent;

    &:before {
        content: "${({open}) => open ? '▼  ' : '▶  '}";
    }
`;

function ShowcaseDescription(props: Props) {
    const {text} = props;
    const showcase = useContext(ShowcaseContext);
    const [open, setOpen] = useState(false);

    const attrs = instanceOf(Showcase, showcase) ? showcase.toObject() : null;
    if (!attrs) { return null; }

    const {
        description,
        guide_information: guideInformation
    } = attrs;

    return (
        <ShowcaseContainer>
            <Description dangerouslySetInnerHTML={{_html: description}} />
            {guideInformation && (
                <React.Fragment>
                    <ButtonWrapper>
                        <Button open={open} onClick={() => setOpen(!open)}>{text.program}</Button>
                    </ButtonWrapper>
                    <SlideComponent open={open}>
                        <div dangerouslySetInnerHTML={{__html: guideInformation}} />
                    </SlideComponent>
                </React.Fragment>
            )}
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
