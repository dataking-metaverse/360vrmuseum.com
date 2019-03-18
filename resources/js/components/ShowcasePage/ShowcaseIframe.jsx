import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";

import instanceOf from "../../helpers/instanceOf";
import ShowcaseContext from "./ShowcaseContext";
import LoadingSpinner from "../LoadingSpinner";
import Showcase from "../../models/Showcase";


type Props = {|

|};

const Root = styled.div`
    position: relative;
    height: 50rem;
    margin-bottom: 3rem;
`;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
`;

const embedRoute = 'https://embed.360vrmuseum.com/showcase/:mid';

const getIframe = R.ifElse(
    instanceOf(Showcase),
    showcase => () => ( <Iframe src={embedRoute.replace(':mid', showcase.getAttribute('mid'))} /> ),
    () => () => ( <LoadingSpinner cover /> )
);

function ShowcaseIframe(props: Props) {
    const showcase = useContext(ShowcaseContext);
    const Iframe = getIframe(showcase);
    return (
        <Root>
            <Iframe />
        </Root>
    );
}

export default ShowcaseIframe;
