import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Row, Col, media} from "styled-bootstrap-grid";

import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";
import {connect} from "react-redux";


type Props = {|
    museumPage: string,
|};

const Title = styled.h1`
    margin-top: 0;
`;

const EnglishTitle = styled.span`
    display: block;
    color: #530d5e;
    font-size: 2.2rem;
    font-weight: 500;
`;

const KoreanTitle = styled.span`
    color: #0c0c0c;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: .2rem;
    white-space: pre-wrap;
`;

const RightCol = styled(Col)`
    //
    
    ${media.xl`
        text-align: right;
    `}
`

const RefButton = styled.a`
    width: 13.2rem;
    height: 3.7rem;
    font-size: 15px;
    color: rgba(83,13,94,.92);
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(83,13,94,.55);
    padding: .4rem 1.2rem;
    text-decoration: none !important; // use of !important, avoid overriding when event's are happening
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
    const {museumPage} = props;
    const showcase = useContext(ShowcaseContext);
    const [attrs, setAttrs] = useState(null);

    useEffect(() => {
        setAttrs(showcase ? showcase.toObject() : null);
    }, [showcase]);

    if (attrs === null) { return null; }

    const {
        kor_title: koreanTitle,
        eng_title: englishTitle,
        showcase_ref: showcaseRef,
        presented_by: presentedBy,
        date,
    } = attrs;

    return (
        <ShowcaseContainer>
            <Row>
                <Col xl={10}>
                    <Title>
                        <EnglishTitle>{englishTitle}</EnglishTitle>
                        <KoreanTitle>{koreanTitle}</KoreanTitle>
                    </Title>
                </Col>
                <RightCol xl={2}>
                    <RefButton href={showcaseRef} target="_blank">{museumPage}</RefButton>
                </RightCol>
            </Row>
            <br />
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
