import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {themeVar} from "../../styling/theme/functions";


const Root = styled.div`
    font-size: ${themeVar('colors.grayscale.400')};
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
