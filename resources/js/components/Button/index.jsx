import React from "react";
import styled, {withTheme} from "styled-components";
import * as R from "ramda";
import switchcase from "switchcase";

import {themeVar} from "../../styling/theme/functions";

import type {ComponentType} from "react";

type Props = {
    children: Node,
    theme?: {},
    type?: string,
    size?: 'default' | 'normal' | 'small',
};

type ButtonColorSet = {|
    backgroundColor: string,
    border: string,
    color: string,
|};


const backgroundColor = R.path(['colorSet', 'backgroundColor']);
const border = R.path(['colorSet', 'border']);
const color = R.path(['colorSet', 'color']);
const Basic = styled.button`
    background-color: ${backgroundColor};
    border: 1px solid ${border};
    color: ${color};
    line-height: 1;
    cursor: pointer;
`;
const Normal = styled(Basic)`
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    border-radius: .4rem;
`;
const Small = styled(Basic)`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: .2rem;
`;

const getColorSet: (theme: Theme) => (type: string) => ButtonColorSet = theme => type => {
    const color = name => R.path(['variables', 'colors', 'basic', name])(theme);
    return R.pipe(
        switchcase({
            primary: {backgroundColor: 'white', border: 'darkerPurple', color: 'darkerPurple'},
            secondary: {backgroundColor: 'darkerPurple', border: 'darkerPurple', color: 'white'},
            whiteBorder: {backgroundColor: 'darkerPurple', border: 'white', color: 'white'},
            default: {backgroundColor: 'white', border: 'darkerPurple', color: 'darkerPurple'},
        }),
        R.mapObjIndexed(color),
    )(type);
};

const getButtonComponent: (size: string) => ComponentType = switchcase({
    small: Small,
    normal: Normal,
    default: Normal,
});

function Button(props: Props) {
    const colorSet: ButtonColorSet = getColorSet(props.theme)(props.type);
    return React.createElement(
        getButtonComponent(props.size),
        {colorSet, ...props},
    );
}

export default R.compose(
    withTheme,
)(Button);
