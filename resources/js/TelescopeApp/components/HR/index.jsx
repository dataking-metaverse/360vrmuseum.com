import React from "react";
import * as R from "ramda";
import styled from "styled-components";


const attr = R.pipe<string, Array<string>, number>(
    R.append<string>(R.__, ['theme', 'hr']),
    R.path,
);

const color = ({color, theme}) => theme.hr[color];

type Props = {
    color?: 'black' | 'lightGrey',
};

const Root = styled.div`
    height: ${attr('height')}rem;
    background-color: ${color};
`;

export default function HR(props: Props) {
    return <Root {...props} color={props.color} />;
};

export const Black = HR.Black = (props: Props) => <HR {...props} color="black" />;
export const LightGrey = HR.LightGrey = (props: Props) => <HR {...props} color="lightGrey" />;
