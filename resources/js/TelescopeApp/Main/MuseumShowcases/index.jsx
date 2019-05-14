import React, {useState} from "react";
import styled from "styled-components";

import ToggleButton from "../../components/ToggleButton";
import Collapsable from "../../components/Collapsable";
import {
    Root,
    Name,
} from "./styled";
import ShowcasesGrid from "../ShowcasesGrid";

import type {Showcases} from "../../types";


type Props = {
    name: string,
    showcases: Showcases,
};

const ToggleButtonAbsolute = styled(ToggleButton)`
    position: absolute;
    top: 0;
    right: 0;
`;

export default function MuseumShowcases(props: Props) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Root>
            <ToggleButtonAbsolute open={open} onClick={() => setOpen(!open)} />
            <Name>{props.name}</Name>
            <Collapsable open={open}>
                <ShowcasesGrid showcases={props.showcases} />
            </Collapsable>
        </Root>
    );
};
