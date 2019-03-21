import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Row, Col, media} from "styled-bootstrap-grid";

import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";
import LoadingSpinner from "../LoadingSpinner";
import {connect} from "react-redux";


type Props = {|

|};

const Title = styled.h1`
    padding-left: 1.3rem;
    margin-top: 0;
`;

const EnglishTitle = styled.span`
    display: block;
    color: #530d5e;
    font-family: "Noto Sans",Sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
`;

const KoreanTitle = styled.span`
    color: #0c0c0c;
    font-family: "Helvetica",Sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: .2rem;
`;

const RefButton = styled.button`
    width: 13.2rem;
    height: 3.7rem;
    font-family: "Noto Sans",Sans-serif;
    font-size: 15px;
    color: rgba(83,13,94,.92);
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(83,13,94,.55);

    ${media.xs`
        margin-left: 1.3rem;
    `}
`;

const MuseumName = styled.div`
    color: #54595f;
    font-family: "Helvetica",Sans-serif;
    font-size: 2rem;
    font-weight: 400;
`;

const Period = styled.div`
    color: #7a7a7a;
    font-family: "Noto Sans",Sans-serif;
    font-size: 1.7rem;
    font-weight: 200;
`;

function ShowcasetTitleInformation(props: Props) {
    const showcase = useContext(ShowcaseContext);
    const [attrs, setAttrs] = useState(null);

    useEffect(() => {
        setAttrs(showcase ? showcase.toObject() : null);
    }, [showcase]);

    if (attrs === null) { return ( <LoadingSpinner /> ); }

    const {
        kor_title: koreanTitle,
        eng_title: englishTitle,
        presented_by: presentedBy,
        date,
    } = attrs;

    return (
        <ShowcaseContainer>
            <Row noGutters>
                <Col noGutter lg={10} md={10} xs={12} sm={10}>
                    <Title>
                        <EnglishTitle>{englishTitle}</EnglishTitle>
                        <KoreanTitle>{koreanTitle}</KoreanTitle>
                    </Title>
                </Col>
                <Col noGutter lg={2} md={2} xs={9} sm={2}>
                    <RefButton>{props.museumPage}</RefButton>
                </Col>
            </Row>
            <MuseumName>{presentedBy}</MuseumName>
            <Period>{date}</Period>
            <hr />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(R.applySpec({
        museumPage: R.path(['lang', 'pages', 'national-museum', 'ShowcaseTitleInformation', 'museumPage'])
    })),
)(ShowcasetTitleInformation);