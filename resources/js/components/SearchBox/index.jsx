import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";


type Props = {
    //
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

const Submit = styled.button`
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


const onSubmit = event => {
    alert(event);
};

export default function SearchBox(props: Props) {
    const {} = props;
    return (
        <Root {...props}>
            <Container>
                <form onSubmit={onSubmit}>
                    <Row className="justify-content-center">
                        <Col xl={4} lg={4} md={6} sm={6} xs={7} className="pr-0">
                            <Input placeholder="Search ..."/>
                        </Col>
                        <Col xl={1} lg={2} md={2} sm={3} xs={4} className="pl-0">
                            <Submit type="submit">

                            </Submit>
                        </Col>
                    </Row>
                </form>
            </Container>
        </Root>
    );
}
