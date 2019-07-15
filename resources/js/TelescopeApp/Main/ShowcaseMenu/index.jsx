import React, {useEffect, useRef} from "react";

import {updateMenuScrollableRef as updateMenuScrollableRefAction} from "../../redux/actionCreators";
import {scopeLogo} from "../../assets";
import useShowcase from "../../hooks/useShowcase";
import Container from "../../components/Container";
import Scrollable from "../../components/Scrollable";
import MuseumIndex from "../MuseumIndex";
import {
    Root,
    Header,
    Logo,
} from "./styled";

import type {Showcase} from "../../types";
import useReduxAction from "../../hooks/useReduxAction";
import ShowcaseContent from "../ShowcaseContent";
import Footer from "../Footer";

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
            <Container>
                <Scrollable ref={menuScrollableRef}>
                    <Header>
                        <Logo src={scopeLogo} />
                    </Header>
                    <MuseumIndex />
                    <Footer />
                </Scrollable>
            </Container>
        </Root>
    );
}
