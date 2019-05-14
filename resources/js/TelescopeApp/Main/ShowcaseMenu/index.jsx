import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {scopeLogo} from "../../assets";
import Scrollable from "../../components/Scrollable";
import MuseumIndex from "../MuseumIndex";
import {
    Root,
    Header,
    Logo,
} from "./styled";
import type {Showcase} from "../../types";

type Props = {|
    activeShowcase: Showcase,
|};

function ShowcaseMenu(props: Props) {
    const {activeShowcase} = props;
    const wideLayout = !activeShowcase;
    return (
        <Root wide={wideLayout}>
            <Scrollable>
                <Header>
                    <Logo src={scopeLogo} />
                </Header>
                <MuseumIndex />
            </Scrollable>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            activeShowcase: R.prop('showcase'),
        })
    )
)(ShowcaseMenu);
