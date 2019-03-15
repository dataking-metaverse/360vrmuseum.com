import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import ModelsContext from "../../../contexts/ModelsContext";
import Showcases from "../../../models/Showcases";


type Props = {
    exhibitionGroups: Array<string>,
};

function renderMuseumGridItem(museumName, showcases: Array<Showcases>) {
    console.log(museumName, showcases);
    return null;
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

    return null;
}

export default R.compose(
    connect(
        R.applySpec({
            exhibitionGroups: R.path(['config', 'pages', 'nationalMuseum', 'exhibitionGroups']),
        }),
        R.always({})
    )
)(MuseumGridItems);
