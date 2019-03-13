import React from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import navigationBarDecorators from "./navigationBarDecorators";
import DesktopNavigationBar from "./DesktopNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";


const DesktopNav = navigationBarDecorators(DesktopNavigationBar);
const MobileNav = navigationBarDecorators(MobileNavigationBar);

type Props = {

};

const desktopBreakpoint = media.lg;

const Desktop = styled.div`
    display: none;

    ${desktopBreakpoint`
        display: block;
    `}
`;

const Mobile = styled.div`
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

export default function NavigationBar(props: Props) {
    return (
        <React.Fragment>
            <Desktop>
                <DesktopNav />
            </Desktop>
            <Mobile>
                <MobileNav />
            </Mobile>
        </React.Fragment>

    );
}
