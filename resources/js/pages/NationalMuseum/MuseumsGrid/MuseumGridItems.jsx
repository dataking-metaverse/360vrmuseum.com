import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {Row, Col} from "styled-bootstrap-grid";

import ModelsContext from "../../../contexts/ModelsContext";
import MuseumTitle from "../../../components/MuseumTitle";
import Showcases from "../../../models/Showcases";
import Showcase from "../../../models/Showcase";


type Props = {
    exhibitionGroups: Array<string>,
};


const getGridSize: (showcases: Showcases) => number = R.cond([
    [R.pathEq(['props', 'length'], 1), R.always(3)],
    [R.pathEq(['props', 'length'], 2), R.always(6)],
    [R.pathEq(['props', 'length'], 3), R.always(9)],
    [R.T, R.always(12)],
]);

function renderMuseumGridItem(museumName, showcases: Showcases) {
    const gridSize = getGridSize(showcases);
    const length = showcases.props.length;
    return (
        <Col key={museumName} col={12} lg={gridSize}>
            <MuseumTitle>{museumName}</MuseumTitle>
            <br />
            <Row className="mb-5">
                {showcases.toArray().map((showcase: Showcase, index) => (
                    <Col key={index} col={12} sm={6} lg={length < 4 ? 12 / length : 3}>
                        {React.createElement(showcase.generatePosterLink())}
                    </Col>
                ))}
            </Row>
        </Col>
    );
}

function MuseumGridItems(props: Props) {
    const {exhibitionGroups} = props;
    const {Showcases} = useContext(ModelsContext);
    const [showcaseGroups, setShowcaseGroups] = useState([]);

    useEffect(() => {
        Showcases.byPresentedBys(exhibitionGroups)
            .then(R.pipe(
                R.toPairs,
                R.sort(([a], [b]) => exhibitionGroups.indexOf(a) - exhibitionGroups.indexOf(b)), // ramda should be able to solve this, rather than self composed
                R.map(R.apply(renderMuseumGridItem)),
                setShowcaseGroups
            ));
    }, []);

    return showcaseGroups;
}

export default R.compose(
    connect(
        R.applySpec({
            exhibitionGroups: R.path(['config', 'pages', 'nationalMuseum', 'exhibitionGroups']),
        }),
        R.always({})
    )
)(MuseumGridItems);
