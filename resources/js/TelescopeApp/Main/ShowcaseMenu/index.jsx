import React from "react";

import {scopeLogo} from "../../assets";
import useShowcase from "../../hooks/useShowcase";
import Scrollable from "../../components/Scrollable";
import MuseumIndex from "../MuseumIndex";
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
    const wideLayout: boolean = !activeShowcase;
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
