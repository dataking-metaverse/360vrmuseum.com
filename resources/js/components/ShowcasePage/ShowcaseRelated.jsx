import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";

import Showcases from "../../models/Showcases";
import shuffle from "../../helpers/shuffle";
import ShowcaseStatement from "./components/ShowcaseStatement";
import ShowcaseSectionTitle from "./components/ShowcaseSectionTitle";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseContainer from "./ShowcaseContainer";


type Props = {
    text: {
        title: string,
        statement: string,
    }
};

const generateThumbnailsByShowcases: (showcases: Showcases) => Array<Node> = R.pipe(
    R.invoker(1, 'toArray')(''),
    shuffle,
    R.slice(0, 4),
    R.map(showcase => (
        <Col key={showcase.getAttribute('mid')} sm={6} xl={3}>
            {React.createElement(showcase.generateThumbnail())}
            <br />
        </Col>
    ))
);

const title = (title, showcase) => title && showcase && showcase.getAttribute('presented_by') ? title.replace('{museumName}', showcase.getAttribute('presented_by')) : null;

function ShowcaseRelated(props: Props) {
    const {text} = props;
    const showcase = useContext(ShowcaseContext);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        showcase && showcase.getRelated().then(R.pipe(generateThumbnailsByShowcases, setThumbnails));
    }, [showcase]);
    if (!showcase) { return null; }
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{title(text.title, showcase)}</ShowcaseSectionTitle>
            <Row>{thumbnails}</Row>
            <br />
            <hr />
            <ShowcaseStatement className="text-right">{text.statement}</ShowcaseStatement>
            <br />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'related']),
        }),
        R.always({})
    )
)(ShowcaseRelated);
