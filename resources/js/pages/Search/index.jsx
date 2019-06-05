import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {Container} from "styled-bootstrap-grid";

import LoadingSpinner from "~/components/LoadingSpinner";
import SearchBox from "~/components/SearchBox";
import getParam from "~/helpers/getParam";
import useLangPath from "~/hooks/useLangPath";
import Showcases from "~/models/Showcases";
import page from "~/decorators/page";
import ShowcaseSearchResult from "./ShowcaseSearchResult";
import {
    MoreSearchTitle,
    MoreSearchSubtitle,
} from "./styled";


type Props = {|  |};



function Search(props: Props) {
    const query: string = getParam('q');
    const [result, setResult] = useState([]);
    const text = useLangPath(['lang', 'pages', 'search']);

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

export default page('search')(Search);
