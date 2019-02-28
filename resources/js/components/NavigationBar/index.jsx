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


type Props = {

};

type InjectedProps = {
    showHome: boolean,
    items: Array<string>,
}

const Root = styled.div`
    background-color: ${themeVar('components.navigationBar.background')};
    font-size: ${themeVar('components.navigationBar.fontSize')};
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
`

const Logo = styled.img``;

const Item = styled(Link)`
    ${flexMiddle()}
    margin-right: 2rem;
    padding-right: 2rem;
    height: ${themeVar('components.navigationBar.height')};
    color: ${themeVar('components.navigationBar.color')};
    text-decoration: none;
    
    &:last-child {
        padding-right: 0;
        margin-right: 0;
    }
`;

@connect(R.applySpec({
    config: R.path(['assets']),
    showHome: R.path(['config', 'navigationBar', 'showHome']),
    items: R.path(['config', 'navigationBar', 'staticItems']),
    logo: R.path(['assets', 'logo']),
}))
export default class NavigationBar extends Injected.Component<Props, InjectedProps> {

    renderItems(): Element {
        return this.props.items.map(itemName => (
            <Item key={itemName} to={itemName}>{itemName}</Item>
        ));
    }

    render() {
        console.log(this.props.items);
        return (
            <Root>
                <Container fluid>
                    <FilledRow>
                        <LeftCol col="2">
                            <Logo src={this.props.logo} />
                        </LeftCol>
                        <RightCol col="10">
                            {this.renderItems()}
                        </RightCol>
                    </FilledRow>
                </Container>
            </Root>
        );
    }
}
