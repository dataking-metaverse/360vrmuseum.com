import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Showcase from "../../models/Showcase";
import {themeVar} from "../../styling/theme/functions";
import {connect} from "react-redux";
import * as R from "ramda";


type Props = {
    showcase: Showcase,
    fullWidth?: boolean,
};

const purple = themeVar('colors.basic.purple');
const white = themeVar('colors.basic.white');

const Root = styled.div`
    position: relative;
    display: block;
    padding-left: ${R.prop('sidePadding')};
    padding-right: ${R.prop('sidePadding')};
    background-color: transparent;
    transition: background-color .4s;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: background-color .4s;
    }
    
    &:hover {
        background-color: ${purple};

        &:before {
            background-color: rgba(0, 0, 0, .6);
        }
    }  
`;

const ViewMoreLink = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    letter-spacing: 1em;
    color: ${white};
    padding: 8rem 1rem;
    text-decoration: none;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity .4s;
    
    &:hover {
        opacity: 1;
    }
`;

function ShowcasePosterLink(props: Props) {
    const {showcase, quickView, fullWidth} = props;
    return (
        <React.Fragment>
            <Root sidePadding={!fullWidth ? '1.6rem' : '0'}>
                {React.createElement(showcase.generatePoster())}
                <ViewMoreLink to={showcase.route()}>{quickView}</ViewMoreLink>
            </Root>
        </React.Fragment>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            showcaseRoute: R.path(['app', 'routes', 'showcase']),
            quickView: R.path(['lang', 'common', 'quickView']),
        }),
        R.always({})
    )
)(ShowcasePosterLink);
