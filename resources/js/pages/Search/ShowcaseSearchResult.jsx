import React from "react";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";
import {Link as RouterLink} from "react-router-dom";

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
    margin-top: 6.5rem;
`;

const Title = styled.div`
    color: rgb(51, 51, 51);
    font-size: 1.8rem;
    line-height: 2.7rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
`;

const Subtitle = styled.div`
    margin-bottom: 2rem;
    color: #747474;
    font-size: 1.3rem;
    font-family: "Noto Sans";
    font-weight: 400;  
`;

const Details = styled.div`
    font-size: 1.2rem;
    border-top: 1px solid rgba(0,0,0,.11);
    border-bottom: 1px solid rgba(0,0,0,.11);
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: rgb(116, 116, 116);
`;

const Link = styled(RouterLink)`
    color: #333;
    text-decoration: none;
    transition: color .4s;
    &:hover {
        color: #777777;
    }
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
