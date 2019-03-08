import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {themeVar} from "../../styling/theme/functions";


const Root = styled.div`
    color: ${themeVar('colors.grayscale.600')};
`;


function Footer(props: Props) {
    return (
        <Root>
            hello, world
        </Root>
    );
}

export default R.compose(
    R.identity
)(Footer);
