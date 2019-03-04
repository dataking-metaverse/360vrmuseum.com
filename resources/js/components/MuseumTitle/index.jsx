import React form "react";
import styled from "styled-component";
import {themeVar} from "../../styling/theme/functions";


type Props = {
    children: string,
};

const Root = styled.h2`
    color: ${themeVar('colors.font.headerColor')};
    font-size: 2rem;
    text-decoration: overline;
    font-weight: 600;
    text-align: center;
`;


export default class MuseumTitle extends React.PureComponent<Props> {
    render() {
        return (
            <Root>
                {this.props.children}
            </Root>
        );
    }
}
