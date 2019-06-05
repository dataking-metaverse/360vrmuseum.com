import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {Container, Row, Col} from "styled-bootstrap-grid";

import LoadingSpinner from "~/components/LoadingSpinner";
import SearchBox from "~/components/SearchBox";
import getParam from "~/helpers/getParam";
import useBooleanState from "~/hooks/useBooleanState";
import useLangPath from "~/hooks/useLangPath";
import Showcases from "~/models/Showcases";
import page from "~/decorators/page";
import ShowcaseSearchResult from "./ShowcaseSearchResult";
import {
    MoreSearchTitle,
    MoreSearchSubtitle,
} from "./styled";


type Props = {|  |};


const mapShowcasesIntoResultCards = R.pipe(
    R.invoker(1, 'toArray')(''),
    R.map(showcase => (
        <Col key={showcase.getAttribute('mid')} lg={3}><ShowcaseSearchResult showcase={showcase} /></Col>
    ))
);

const wrapInRow = children => <Row>{children}</Row>;

function Search(props: Props) {
    const query: string = getParam('q');
    const [loading, setLoading, setNotLoading] = useBooleanState(false);
    const [result, setResult] = useState( null);
    const text = useLangPath(['pages', 'search']);

    useEffect(() => {
        Showcases.search(query)
            .then(mapShowcasesIntoResultCards)
            .then(wrapInRow)
            .then(setResult);
    }, [query]);

    if (result === null) { return <LoadingSpinner /> }
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

export default page('search')(Search);
