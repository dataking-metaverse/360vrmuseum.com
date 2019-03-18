import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";

import RatioGrid from "../../RatioGrid";
import {themeMixin} from "../../../styling/theme/functions";
import ShowcaseStatement from "./ShowcaseStatement";


type Props = {
    title: string,
    address: string,
};

const Iframe = styled.iframe`
    padding: 0;
    margin: 0;
    border: none;
    ${themeMixin('fill')}
`;


const iframeUrl: (address: string) => string = R.pipe(
    encodeURI,
    R.concat('q='),
    R.concat('?'),
    R.concat('https://maps.google.com/maps'),
    R.concat(R.__, '&k=m'),
);

function GoogleMaps(props: Props) {
    const {address, title} = props;
    const url = iframeUrl(address);
    return (
        <React.Fragment>
            <RatioGrid ratio={.5625}>
                <Iframe
                    src={url}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    aria-label={address}
                />
            </RatioGrid>
            <br />
            <ShowcaseStatement>{title}</ShowcaseStatement>
        </React.Fragment>
    );
}

export default GoogleMaps;
