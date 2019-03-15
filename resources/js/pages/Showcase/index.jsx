import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {withRouter} from "react-router";

import ShowcasePage from "../../components/ShowcasePage";
import ModelsContext from "../../contexts/ModelsContext";


type Props = {
    match: {
        params: {
            mid: string,
        },
    },
};

function Showcase(props: Props) {
    const mid = R.path(['match', 'params', 'mid'])(props);
    const {Showcase: ShowcaseModel} = useContext(ModelsContext);
    const [showcase, setShowcase] = useState(null);

    useEffect(() => {
        ShowcaseModel.get(mid).then(setShowcase);
    }, [mid]);

    return (
        <ShowcasePage showcase={showcase} />
    );
}

export default R.compose(
    withRouter
)(Showcase);
