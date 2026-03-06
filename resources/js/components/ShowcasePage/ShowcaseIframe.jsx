import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";

import instanceOf from "../../helpers/instanceOf";
import ShowcaseContext from "./ShowcaseContext";
import LoadingSpinner from "../LoadingSpinner";
import Showcase from "../../models/Showcase";


type Props = {|

|};

type FrameProps = {
    showcase: ?Showcase,
};

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

function Frame (props: FrameProps) {
    const {showcase} = props;
    if (!(showcase instanceof Showcase)) { return <LoadingSpinner cover />; }
    const mid = showcase.getAttribute('mid');
    const isPremium = showcase.getAttribute('isPremium');
    console.log('isPremium');
    console.log(isPremium);
    const showEmbed = showcase.getAttribute('show_embed');

    if(isPremium === true){
        return <Iframe src={`https://premium.360vrmuseum.com/?m=${mid}&play=0&qs=0&hr=1`} allowFullScreen allow="vr" allow="xr-spatial-tracking" />;    
    }

    return <Iframe src={`https://embed.360vrmuseum.com/showcase/${mid}?show_embed=${showEmbed ? 1 : 0}`} allowFullScreen allow="vr" allow="xr-spatial-tracking" />;
}

function ShowcaseIframe(props: Props) {
    const showcase = useContext(ShowcaseContext);
    return <Root><Frame showcase={showcase} /></Root>;
}

export default ShowcaseIframe;
