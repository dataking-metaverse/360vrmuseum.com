import React, {useEffect, useRef} from "react";

import {updateMenuScrollableRef as updateMenuScrollableRefAction} from "../../redux/actionCreators";
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
import useReduxAction from "../../hooks/useReduxAction";

type Props = {|

|};

export default function ShowcaseMenu(props: Props) {
    const activeShowcase: Showcase = useShowcase();
    const updateMenuScrollableRef = useReduxAction(updateMenuScrollableRefAction);
    const show: boolean = !activeShowcase;
    const menuScrollableRef = useRef();

    useEffect(() => {
        updateMenuScrollableRef(menuScrollableRef);
    }, [menuScrollableRef]);

    return (
        <Root show={show}>
            <Scrollable ref={menuScrollableRef}>
                <Header>
                    <Logo src={scopeLogo} />
                </Header>
                <MuseumIndex />
            </Scrollable>
        </Root>
    );
}
