import React, {useState} from "react";
import styled from "styled-components";
import * as R from "ramda";

import HR from "~/TelescopeApp/components/HR";
import ToggleButton from "~/TelescopeApp/components/ToggleButton";
import Collapsable from "~/TelescopeApp/components/Collapsable";
import {
    Root,
    Name,
} from "./styled";
import ShowcasesGrid from "../ShowcasesGrid";

import type {Showcases} from "~/TelescopeApp/types";


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
    const [open, setOpen] = useState<boolean>(true);
    return (
        <Root>
            <HR.Black />
            <ToggleButtonAbsolute open={open} onClick={R.F} />
            <Name onClick={() => setOpen(!open)}>{props.name}</Name>
            <Collapsable open={open}>
                <ShowcasesGrid showcases={props.showcases} />
            </Collapsable>
        </Root>
    );
};
