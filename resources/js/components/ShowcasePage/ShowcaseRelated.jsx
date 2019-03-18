import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";
import {media} from "styled-bootstrap-grid";

import Showcases from "../../models/Showcases";
import shuffle from "../../helpers/shuffle";
import LoadingSpinner from "../LoadingSpinner";
import ShowcaseStatement from "./components/ShowcaseStatement";
import ShowcaseSectionTitle from "./components/ShowcaseSectionTitle";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseContainer from "./ShowcaseContainer";


type Props = {

};

const generateThumbnailsByShowcases: (showcases: Showcases) => Array<Node> = R.pipe(
    R.invoker(1, 'toArray')(''),
    shuffle,
    R.slice(0, 4),
    R.map(showcase => (
        <Col key={showcase.getAttribute('mid')} col={12} md={4} lg={3}>
            <Link to={showcase.route()}>
                {React.createElement(showcase.generateThumbnail())}
            </Link>
            <br />
        </Col>
    ))
);



function ShowcaseRelated(props: Props) {
    const {text} = props;
    const showcase = useContext(ShowcaseContext);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        showcase && showcase.getRelated().then(R.pipe(generateThumbnailsByShowcases, setThumbnails));
    }, [showcase]);

    if (!showcase) { return <LoadingSpinner />; }
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            <Row>
                {thumbnails}
            </Row>
            <ShowcaseStatement>{text.statement}</ShowcaseStatement>
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'related']),
        })
    )
)(ShowcaseRelated);
