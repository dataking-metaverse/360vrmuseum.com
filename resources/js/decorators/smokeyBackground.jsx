import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Element, Component} from "react";

const backgroundColor = R.path(['theme', 'variables', 'colors', 'basic', 'whisper']);
const Root = styled.div`
    background-color: ${backgroundColor};
`;

type Props = {
    children: Element,
};

function SmokeyBackground(props: Props) {
    return <Root>{props.children}</Root>
}

const smokeyBackground = (Component: Component<{}>) => (props: {}) => (
    <SmokeyBackground>
        <Component {...props} />
    </SmokeyBackground>
);

export default smokeyBackground;
