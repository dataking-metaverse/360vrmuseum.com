import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Showcase from "../../models/Showcase";
import {themeMixin, themeVar} from "../../styling/theme/functions";
import RatioGrid from "../RatioGrid";


type Props = {
    showcase: Showcase,
};

type InnerProps = {
    showcase: Showcase,
};

const PureLink = styled(Link)`
    color: ${themeVar('colors.basic.white')};
    
    &:hover, &:visited, &:focus {
        color: ${themeVar('colors.basic.white')};
    }
`;

const Image = styled.div`
    ${themeMixin('fill')}
    background-image: url(${R.prop('src')});
    background-size: cover;
    background-position: 50% 50%;
`;

const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
`;

const MainTitle = styled.div`
    line-height: 1;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const firstThumbnail = R.path(['props', 'list_of_images', 0]);
const mainTitle = R.invoker(1, 'getAttribute')('main_title');
function ShowcaseCardInner(props: InnerProps) {
    const {showcase} = props;
    if (!showcase) { return null; }
    return (
        <React.Fragment>
            <Image src={firstThumbnail(showcase)} />
            <Text>
                <MainTitle>{mainTitle(showcase)}</MainTitle>
            </Text>
        </React.Fragment>
    );
}

function ShowcaseCard(props: Props) {
    const {showcase} = props;
    const showcaseRoute = showcase.route();
    return (
        <PureLink to={showcaseRoute}>
            <RatioGrid ratio={.5625}>
                <ShowcaseCardInner showcase={showcase} />
            </RatioGrid>
        </PureLink>
    );
}

export default R.compose(
    R.identity
)(ShowcaseCard);
