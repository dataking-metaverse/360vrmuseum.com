import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import * as R from "ramda";


type Props = {
    showcase: Showcase,
};

const Root = styled.div`
    background-color: #ededed;
    padding: 0 4rem;
`;

const Input = styled.input`
    display: inline-block;
    width: 100%;
    height: 5rem;
    color: #aaa9a9;
    background-color: #fff;
    font-size: 1.3rem;
    padding: .8rem 1.5rem;
    border: 1px solid #d2d2d2;
`;

const Submit = styled.input`
    width: 50%;
    height: 5rem;
    background: #000;
    border: none;
    border-radius: 0;
    color: #fff;
    font-size: 1em;
    text-indent: 0;
    cursor: pointer;
    font-family: icomoon;
    font-weight: 400;
    text-shadow: none;
    -webkit-font-smoothing: antialiased;
    transition: all .2s;
`;

export default function SearchBox(props: Props) {
    const {} = props;
    return (
        <Root>
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} className="pr-0">
                        <Input placeholder="Search ..."/>
                    </Col>
                    <Col xl={1} className="pl-0">
                        <Submit type="submit" value=""/>
                    </Col>
                </Row>
            </Container>
        </Root>
    );
}
