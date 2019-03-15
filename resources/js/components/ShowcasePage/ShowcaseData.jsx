import React, {useContext} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";


type Props = {|

|};

type IconProps = {|
    text: {
        isPerforminAvailable: string,
        isConversationAvailable: string,
        isPaidExhibition: string,
    },
|};

const icons = connect(R.applySpec({
    text: R.path(['lang', 'pages', 'showcase']),
}));

const IconText = styled.span`
    margin-right: 1em;
`;

const Icon = styled.svg`
    display: inline-block;
    vertical-align: baseline;
    width: 1em;
    height: 1em;
`;

const mic = <Icon data-prefix="fas" data-icon="microphone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-microphone fa-w-11"><path fill="currentColor" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" /></Icon>;
const eye = <Icon data-prefix="far" data-icon="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-eye fa-w-18"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" /></Icon>
const ticket = <Icon data-prefix="fas" data-icon="ticket-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-ticket-alt fa-w-18"><path fill="currentColor" d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"/></Icon>;

const IsPerformingAvailable = icons(({text}: IconProps) => ( <IconText>{mic}&nbsp;{text.isPerforminAvailable}</IconText> ));
const IsConversationAvailable = icons(({text}: IconProps) => ( <IconText>{eye}&nbsp;{text.isConversationAvailable}</IconText> ));
const IsPaidExhibition = icons(({text}: IconProps) => ( <IconText>{ticket}&nbsp;{text.isPaidExhibition}</IconText> ));

function ShowcaseData(props: Props) {
    const showcase = useContext(ShowcaseContext);
    return (
        <ShowcaseContainer>
            <Row>
                <Col sm={6}>
                    <IsPerformingAvailable />
                    <IsConversationAvailable />
                    <IsPaidExhibition />
                </Col>
                <Col sm={6} className="text-right">
                    todo
                </Col>
            </Row>
            <br /><br />
        </ShowcaseContainer>
    );
}

export default R.compose(
    R.identity
)(ShowcaseData);
