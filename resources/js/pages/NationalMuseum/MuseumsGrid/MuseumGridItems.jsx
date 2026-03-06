import React, {useEffect, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Row, Col} from "styled-bootstrap-grid";

import {registerShowcaseGroupsElements, appendShowcaseGroupsElements} from "../../../redux/actionCreators/nationalMuseum";
import ModelsContext from "../../../contexts/ModelsContext";
import MuseumTitle from "../../../components/MuseumTitle";
import Showcases from "../../../models/Showcases";
import Showcase from "../../../models/Showcase";

import type {Node} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";


type Props = {
    exhibitionGroups: Array<string>,
    showcaseGroupsElements: Array<Node>,
    registerShowcaseGroupsElements: (value: Array<Node>) => void,
    appendShowcaseGroupsElements: (value: Array<Node>) => void,
    match: {
        params: {
            museumName?: string,
        },
    },
};


const getMuseumName: (props: Props) => ?string = R.path(['match', 'params', 'museumName']);

const getGridSize: (showcases: Showcases) => number = R.cond([
    [R.pathEq(['props', 'length'], 1), R.always(3)],
    [R.pathEq(['props', 'length'], 2), R.always(6)],
    [R.pathEq(['props', 'length'], 3), R.always(9)],
    [R.T, R.always(12)],
]);

/**
 * @type {function(...[Array<*>]): boolean}
 */
const renderShowcaseGroups = R.ifElse(
    R.complement(R.anyPass([R.isNil, R.isEmpty])),
    R.identity,
    R.always(
        <Col style={{minHeight: '100vh'}}>
            <LoadingSpinner style={{backgroundColor: 'transparent'}} />
        </Col>
    )
);

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
                        <br /><br />
                    </Col>
                ))}
            </Row>
        </Col>
    );
}

function MuseumGridItems(props: Props) {
    const {exhibitionGroups, showcaseGroupsElements, registerShowcaseGroupsElements, appendShowcaseGroupsElements} = props;
    const {Showcases} = useContext(ModelsContext);
    const museumName = getMuseumName(props);
    const pickedExhibitions = typeof museumName === 'undefined' ? exhibitionGroups : [museumName];

    useEffect(() => {
        const loadMuseums = async () => {
            // Clear existing elements if any
            registerShowcaseGroupsElements([]);
            
            // Fetch each museum group individually for progressive rendering
            for (const exhibition of pickedExhibitions) {
                try {
                    const group = await Showcases.byPresentedBys([exhibition]);
                    const elements = R.pipe(
                        R.toPairs,
                        R.map(R.apply(renderMuseumGridItem))
                    )(group);
                    appendShowcaseGroupsElements(elements);
                } catch (e) {
                    console.error(`Failed to load showcases for ${exhibition}`, e);
                }
            }
        };
        loadMuseums();
    }, [museumName]);

    return renderShowcaseGroups(showcaseGroupsElements);
}

export default R.compose(
    connect(
        R.applySpec({
            exhibitionGroups: R.path(['config', 'pages', 'nationalMuseum', 'exhibitionGroups']),
            showcaseGroupsElements: R.prop('showcaseGroupsElements'),
        }),
        R.applySpec({registerShowcaseGroupsElements, appendShowcaseGroupsElements})
    ),
    withRouter
)(MuseumGridItems);
