import React from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import DesktopNavigationBar from "./DesktopNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";

type Props = {|  |};

const desktop = media.lg;

const Desktop = styled.div`
    display: none;

    ${desktop`
        display: block;
    `}
`;

const Mobile = styled.div`
    display: block;
    
    ${desktop`
        display: none;
    `}
`;

const desktopNav = (
    <Desktop>
        <DesktopNavigationBar />
    </Desktop>
);

const mobileNav = (
    <Mobile>
        <MobileNavigationBar />
    </Mobile>
);


export default function NavigationBar(props: Props) {
    return (
        <>
            {desktopNav}
            {mobileNav}
        </>
    );
}
