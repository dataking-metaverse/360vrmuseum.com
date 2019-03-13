import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {themeVar} from "../../styling/theme/functions";
import {flexMiddle, flexRight} from "../../styling/theme/mixins";

import Injected from "../Injected";

import type {Element} from "react";
import {withRouter} from "react-router";


type Props = {

};

type InjectedProps = {
    showHome: boolean,
    logo: string,
    routes: Array<{
        item: string,
        title: string,
        to: string,
    }>,
};

const Root = styled.div`
    background-color: ${themeVar('components.navigationBar.background')};
    font-size: ${themeVar('components.navigationBar.fontSize')};
    letter-spacing: .1rem;
`;

const CustomContainer = styled.div`
    
`;

const FilledRow = styled(Row)`
    height: ${themeVar('components.navigationBar.height')};
`;

const LeftCol = styled(Col)`
    ${flexMiddle()}
`;

const RightCol = styled(Col)`
    ${flexMiddle()}
    ${flexRight()}
`;

const Logo = styled.img``;

const Item = styled(Link)`
    position: relative;
    ${flexMiddle()}
    margin-right: 4rem;
    height: ${themeVar('components.navigationBar.height')};
    color: #e5e5e5;
    text-decoration: none;
    padding-bottom: 1rem;
    
    &:last-child {
        padding-right: 0;
        margin-right: 0;
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .3rem;
        background-color: #e5e5e5;
        opacity: 0;
        transition: ${themeVar('transitionDuration')};
    }
    
    ${props => props.active && '&:before,'}
    &:hover:before {
        opacity: 1;
    }
`;

function renderRoutes(routes): Element {
    return routes.map(({name, title, to}) => (
        <Item key={name} to={to}>{title}</Item>
    ));
}

function NavigationBar(props: Props & InjectedProps) {
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo src={props.logo} />
                    </LeftCol>
                    <RightCol col="10">
                        {renderRoutes(props.routes)}
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            showHome: R.path(['config', 'navigationBar', 'showHome']),
            logo: R.path(['assets', 'logo']),
            routes: R.pipe(
                R.applySpec({
                    items: R.path(['config', 'navigationBar', 'staticItems']),
                    titles: R.pipe(
                        R.path(['lang', 'navigation']),
                        R.mapObjIndexed(R.path(['title']))
                    ),
                    routes: R.path(['app', 'routes']),
                }),
                params => params.items.map(item => ({
                    name: item,
                    title: params.titles[item],
                    to: params.routes[item],
                })),
            ),
        }),
        R.always({})
    )
)(NavigationBar)
