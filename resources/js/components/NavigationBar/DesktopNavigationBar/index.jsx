import React from "react";
import {Container} from "styled-bootstrap-grid";

import AuthButtons from "./AuthButtons";
import Links from "./Links";
import Logo from "./Logo";
import {
    Root,
    FilledRow,
    LeftCol,
    RightCol,
} from "./styled";

import type {DecoratedProps} from "../navigationBarDecorators";


export default function DesktopNavigationBar(props: DecoratedProps) {
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo to={props.homeRoute} logo={props.logo} />
                    </LeftCol>
                    <RightCol col="10">
                        <Links routes={props.routes} />
                        <AuthButtons />
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}
