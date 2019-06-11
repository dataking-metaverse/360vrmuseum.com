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
    ratio?: number,
};

type InnerProps = {
    showcase: Showcase,
    presentedByText: string,
};

const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.6rem 1.83rem;
    z-index: 1;
`;

const PureLink = styled(Link)`
    position: relative;
    display: block;
    color: ${themeVar('colors.basic.white')};
    border-radius: .4rem;
    overflow: hidden;
    
    ${Text} {
        transition: color .4s;
        transition-delay: 0s !important;
    }
    
    
    &:hover, &:visited, &:focus {
        color: ${themeVar('colors.basic.white')};
    }
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 150%;
        width: 100%;
        background-image: linear-gradient(to bottom, rgba(68, 68, 68, 0), #444444);
        transition: top .4s;
    }
    
    &:hover:after {
        top: -50%;
    }
    
    &:hover ${Text} {
        color: transparent !important;
    }
`;

const Image = styled.div`
    ${themeMixin('fill')}
    background-image: url(${R.prop('src')});
    background-size: cover;
    background-position: 50% 50%;
`;

const ElipsesText = styled.div`
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MainTitle = styled(ElipsesText)`
    font-size: 1.7rem;
    margin-bottom: .4em;
`;

const Subtitle = styled(ElipsesText)`
    font-size: 1.2rem;
`;

const firstThumbnail = R.path<string | number, string>(['props', 'list_of_images', 0, 'thumb']);
const mainTitle = R.invoker(1, 'getAttribute')('main_title');

const ShowcaseCardInner = R.compose(
    connect(R.applySpec({
        presentedBy: R.path(['lang', 'components', 'showcaseRelated', 'presentedBy']),
    }), R.always({}))
)(function ShowcaseCardInner(props: InnerProps) {
    const {showcase, presentedBy} = props;
    if (!showcase) { return null; }
    return (
        <React.Fragment>
            <Image src={firstThumbnail(showcase)} />
            <Text>
                <MainTitle>{mainTitle(showcase)}</MainTitle>
                <Subtitle>
                    {presentedBy.replace('{presentedBy}', showcase.getAttribute('presented_by'))}
                </Subtitle>
            </Text>
        </React.Fragment>
    );
});

function ShowcaseThumbnail(props: Props) {
    const {showcase, ratio} = props;
    const showcaseRoute = showcase.route();
    return (
        <PureLink to={showcaseRoute}>
            <RatioGrid ratio={ratio || .5625}>
                <ShowcaseCardInner showcase={showcase} />
            </RatioGrid>
        </PureLink>
    );
}

export default ShowcaseThumbnail;
