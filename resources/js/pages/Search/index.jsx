import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {Container, Row, Col} from "styled-bootstrap-grid";

import LoadingSpinner from "~/components/LoadingSpinner";
import getParam from "~/helpers/getParam";
import useLangPath from "~/hooks/useLangPath";
import Showcases from "~/models/Showcases";
import page from "~/decorators/page";
import ShowcaseSearchResult from "./ShowcaseSearchResult";
import {
    Root,
    Title,
} from "./styled";


type Props = {|  |};


const mapShowcasesIntoResultCards = R.pipe(
    R.invoker(1, 'toArray')(''),
    R.map(showcase => (
        <Col key={showcase.getAttribute('mid')} sm={4} lg={3}><ShowcaseSearchResult showcase={showcase} /></Col>
    ))
);

const wrapInRow = children => <Row>{children}</Row>;

function Search(props: Props) {
    const query: string = getParam('q');
    const [result, setResult] = useState( null);
    const text = useLangPath(['pages', 'search']);
    const title = text.title.replace('%s', query);

    useEffect(() => {
        Showcases.search(query)
            .then(mapShowcasesIntoResultCards)
            .then(wrapInRow)
            .then(setResult);
    }, [query]);

    if (result === null) { return <LoadingSpinner /> }
    return (
        <Root>
            <Container>
                <Title>{title}</Title>
                {result}
            </Container>
        </Root>
    );
}

export default page('search')(Search);
