import React from "react";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {themeVar} from "../../styling/theme/functions";


type Props = {|
    content: ContentType,
|};

export type ContentType = {|
    title: string,
    subtitle: string,
    content: string,
|};


const CustomContainer = styled.div`
    width: 118rem;
    max-width: 100%;
    padding-top: 10rem;
    padding-left: 4rem;
    padding-right: 4rem;
    margin: auto;
`;

const Subtitle = styled.h2`
    font-size: 2.2rem;
    color: ${themeVar('colors.basic.purple')};
    margin: 0;
`;
const Title = styled.h1`
    font-size: 5.2rem;
    line-height: 1.3;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: .8em;
`;
const Hr = styled.div`
    border-top-style: solid;
    border-top-width: 2px;
    border-top-color: rgba(0,0,0,.15);
`;
const Content = styled.div`
    color: #7a7a7a;
    color: ${themeVar('colors.grayscale')};
    p { margin-bottom: 2rem; }
`;

export default function PolicyPage(props: Props) {
    return (
        <CustomContainer>
            <Subtitle>{props.subtitle}</Subtitle>
            <Title>{props.title}</Title>
            <Hr />
            <br /><br /><br />
            <Content dangerouslySetInnerHTML={{__html: props.content}} />
        </CustomContainer>
    );
}
