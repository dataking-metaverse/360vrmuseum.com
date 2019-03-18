import React from "react";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";
import {Link} from "react-router-dom";

import Showcase from "../../models/Showcase";


type Props = {
    showcase: Showcase,
    text: {|
        title: string,
        commentCount: string,
        readMore: string,
    |}
};


const Root = styled.div`

`;

const Title = styled.div`
    
`;

const Subtitle = styled.div`

`;

const Details = styled.div`
    
`;


function ShowcaseSearchResult(props: Props) {
    const {showcase, text} = props;
    const {
        eng_title: englishTitle,
        kor_title: koreanTitle,
        date,
    } = showcase.toObject();

    return (
        <Root>
            <Title>{koreanTitle}</Title>
            <Subtitle>{englishTitle} | {koreanTitle}</Subtitle>
            <br /><br />
            <Details>
                <Row>
                    <Col col={10}>
                        {date} | {'TODO'}
                    </Col>
                    <Col col={2}>
                        <Link to={showcase.route()}>{text.readMore} &raquo;</Link>
                    </Col>
                </Row>
            </Details>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'search']),
        }),
        R.always({})
    )
)(ShowcaseSearchResult);
