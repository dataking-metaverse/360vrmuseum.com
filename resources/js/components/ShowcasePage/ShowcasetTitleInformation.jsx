import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";

import ShowcaseContainer from "./ShowcaseContainer";
import ShowcaseContext from "./ShowcaseContext";
import LoadingSpinner from "../LoadingSpinner";


type Props = {|

|};

const Title = styled.h1`

`;

const EnglishTitle = styled.span`

`;

const KoreanTitle = styled.span`

`;

const RefButton = styled.button`

`;

const MuseumName = styled.div`

`;

const Period = styled.div`

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
                <Col noGutter lg={11}>
                    <Title>
                        <KoreanTitle>{koreanTitle}</KoreanTitle>
                        <EnglishTitle>{englishTitle}</EnglishTitle>
                    </Title>
                </Col>
                <Col noGutter lg={1}>
                    <RefButton>REF TEXT</RefButton>
                </Col>
            </Row>
            <MuseumName>{presentedBy}</MuseumName>
            <Period>{date}</Period>
            <hr />
        </ShowcaseContainer>
    );
}

export default R.compose(
    R.identity
)(ShowcasetTitleInformation);
