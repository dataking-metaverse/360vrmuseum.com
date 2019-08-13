import React from "react";
import styled, {withTheme} from "styled-components";
import * as R from "ramda";

import type {Node, ComponentType} from "react";
import type {Theme} from "styled-components";

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


const propValue = (propName, yes, no) => props => props[propName] ? yes : no;

const backgroundColor = R.path<string, string>(['colorSet', 'backgroundColor']);
const border = R.path(['colorSet', 'border']);
const color = R.path(['colorSet', 'color']);
const Basic = styled.button`
    background-color: ${backgroundColor};
    border: 1px solid ${border};
    color: ${color};
    line-height: 1;
    cursor: ${propValue('disabled', 'initial', 'pointer')};
    opacity: ${propValue('disabled', .4, 1)};
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

const getColorSet = (theme: Theme) => (type: string): ButtonColorSet => {

    const color = name => R.path<string, string>(['variables', 'colors', 'basic', name], theme);

    return R.pipe(
        R.prop(R.__, {
            primary: {backgroundColor: 'white', border: 'darkerPurple', color: 'darkerPurple'},
            secondary: {backgroundColor: 'darkerPurple', border: 'darkerPurple', color: 'white'},
            whiteBorder: {backgroundColor: 'darkerPurple', border: 'white', color: 'white'},
            default: {backgroundColor: 'white', border: 'darkerPurple', color: 'darkerPurple'},
        }),
        R.mapObjIndexed(color),
    )(type);
};

const getButtonComponent: (size: string) => ComponentType = size => ({
    small: Small,
    normal: Normal,
    default: Normal,
})[size];

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
