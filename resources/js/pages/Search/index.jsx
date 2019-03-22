import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {Container, Row, Col} from "styled-bootstrap-grid";
import Showcases from "../../models/Showcases";
import styled from "styled-components";

import getParam from "../../helpers/getParam";
import LoadingSpinner from "../../components/LoadingSpinner";
import SearchBox from "../../components/SearchBox";
import ShowcaseSearchResult from "./ShowcaseSearchResult";
import {connect} from "react-redux";
import page from "../../decorators/page";


type Props = {
    text: {
        title: string,
        commentCount: string,
        readMore: string,
        moreSearch: {
            title: string,
            subtitle: string,
        },
    },
};


const MoreSearchTitle = styled.h2`
    font-size: 5.2rem;
    line-height: 1.3;
    margin: 0;
    margin-bottom: .5em;
`;

const MoreSearchSubtitle = styled.div`
    color: #7a7a7a;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
`;

function Search(props: Props) {
    const {text} = props;
    const query: string = getParam('q');
    const [result, setResult] = useState([]);

    useEffect(() => {
        Showcases.search(query).then(R.pipe(
            R.invoker(1, 'toArray')(''),
            R.map(showcase => (
                <ShowcaseSearchResult key={showcase.getAttribute('mid')} showcase={showcase} />
            )),
            setResult
        ));
    }, [query]);

    if (result.length === 0) { return <LoadingSpinner /> }
    return (
        <Container>
            {result}
            <br /><br /><br /><br />
            <MoreSearchTitle>{text.moreSearch.title}</MoreSearchTitle>
            <MoreSearchSubtitle>{text.moreSearch.subtitle}</MoreSearchSubtitle>
            <br /><br />
            <SearchBox />
            <br /><br />
        </Container>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'search']),
        })
    ),
    page('search')
)(Search);
