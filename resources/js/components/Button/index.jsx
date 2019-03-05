import React from "react";
import styled, {withTheme} from "styled-components";
import * as R from "ramda";
import {themeVar} from "../../styling/theme/functions";
import switchcase from "switchcase";


type Props = {
    children: Element,
    theme: {},
    type: ?string,
};

type ButtonColorSet = {|
    primary: string,
    secondary: string,
|};


const backgroundColor = R.path(['colorSet', 'backgroundColor']);
const border = R.path(['colorSet', 'border']);
const color = R.path(['colorSet', 'color']);
const Root = styled.button`
    padding: 1.5rem 3rem;
    background-color: ${backgroundColor};
    border: 1px solid ${border};
    color: ${color};
    font-size: 1.2rem;
    border-radius: .4rem;
    line-height: 1;
`;

function Button(props: Props) {

    const color = name => R.path(['variables', 'colors', 'basic', name])(props.theme);

    const colorSet = switchcase({
        primary: { backgroundColor: color('white'), border: color('darkerPurple'), color: color('darkerPurple') },
        secondary: { backgroundColor: color('darkerPurple'), border: color('darkerPurple'), color: color('white') },
        default: { backgroundColor: color('white'), border: color('darkerPurple'), color: color('darkerPurple') },
    })(props.type);

    console.log(colorSet);

    return (
        <Root colorSet={colorSet} {...props} />
    );
}

export default R.compose(
    withTheme,
)(Button);
