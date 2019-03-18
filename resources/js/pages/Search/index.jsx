import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {Container, Row, Col} from "styled-bootstrap-grid";
import Showcases from "../../models/Showcases";

import getParam from "../../helpers/getParam";
import LoadingSpinner from "../../components/LoadingSpinner";
import ShowcaseSearchResult from "./ShowcaseSearchResult";

type Props = {
    text: {

    },
};


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
        </Container>
    );
}

export default R.compose(
    R.identity
)(Search);
