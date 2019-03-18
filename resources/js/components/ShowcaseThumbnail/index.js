import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";

import Showcase from "../../models/Showcase";
import {percentage, themeMixin, themeVar} from "../../styling/theme/functions";
import RatioGrid from "../RatioGrid";


type Props = {
    showcase: Showcase,
};

const firstThumbnail = R.path(['props', 'list_of_images', 0]);

const Image = styled.div`
    ${themeMixin('fill')}
    background-image: url(${R.prop('src')});
    background-size: cover;
    background-position: 50% 50%;
`;

function ShowcaseCard(props: Props) {
    const {showcase} = props;
    const showcaseRoute = showcase.route();
    return (
        <RatioGrid ratio={.5625}>
            <Image src={firstThumbnail(showcase)} />
        </RatioGrid>
    );
}

export default R.compose(
    R.identity
)(ShowcaseCard);
