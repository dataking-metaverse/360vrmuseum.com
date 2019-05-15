import React from "react";

import {scopeLogo} from "../../assets";
import Scrollable from "../../components/Scrollable";
import MuseumIndex from "../MuseumIndex";
import useShowcase from "../../hooks/useReduxState";
import {
    Root,
    Header,
    Logo,
} from "./styled";

import type {Showcase} from "../../types";

type Props = {|

|};

export default function ShowcaseMenu(props: Props) {
    const activeShowcase: Showcase = useShowcase();
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
