import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {withRouter} from "react-router";
import styled from "styled-components";

import ShowcasePage from "../../components/ShowcasePage";
import ModelsContext from "../../contexts/ModelsContext";
import page from "../../decorators/page";


type Props = {
    match: {
        params: {
            mid: string,
        },
    },
};

const Root = styled.div`
    min-height: 80vh;
`;

function Showcase(props: Props) {
    const mid = R.path(['match', 'params', 'mid'])(props);
    const {Showcase: ShowcaseModel} = useContext(ModelsContext);
    const [showcase, setShowcase] = useState(null);

    useEffect(() => {
        ShowcaseModel.get(mid).then(setShowcase);
    }, [mid]);

    return (
        <Root>
            <ShowcasePage showcase={showcase} />
        </Root>
    );
}

export default R.compose(
    withRouter,
    page('showcase')
)(Showcase);
