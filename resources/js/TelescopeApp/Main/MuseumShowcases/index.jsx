import React, {useState} from "react";
import styled from "styled-components";

import ToggleButton from "../../components/ToggleButton";
import {
    Root,
    Name,
} from "./styled";
import ShowcasesGrid from "../ShowcasesGrid";
import {arrow} from "../../assets";

import type {Showcases} from "../../types";


type Props = {
    name: string,
    showcases: Showcases,
};

const ToggleButtonStyled = styled(ToggleButton)`
    position: absolute;
    top: 0;
    right: 0;
`;

export default function MuseumShowcases(props: Props) {
    const [open, setOpen] = useState(false);
    return (
        <Root>
            <ToggleButtonStyled open={open} src={arrow.down} onClick={() => setOpen(!open)} />
            <Name>{props.name}</Name>
            <ShowcasesGrid showcases={props.showcases} />
        </Root>
    );
};
