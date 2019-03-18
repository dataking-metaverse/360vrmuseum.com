import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import * as R from "ramda";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import type {RouterHistory} from "react-router-dom";


type Props = {
    searchRoute: string,
    history: RouterHistory,
};

const Root = styled.div`
    background-color: #f4f4f4;
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
    height: 5rem;
    width: 5rem;
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

const SearchIconOriginal = props => <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill="#ffffff" d='M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z' /></svg>;
const SearchIcon = styled(SearchIconOriginal)`
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
`;

function SearchBox(props: Props) {
    const {searchRoute} = props;
    const qRef = React.createRef();

    function onSubmit(event) {
        event.preventDefault();
        const node = qRef.current;
        if (!(node instanceof HTMLInputElement)) { return; }
        props.history.push(`${searchRoute}?q=${node.value}`);
    }

    return (
        <Root {...props}>
            <Container>
                <form onSubmit={onSubmit}>
                    <Row className="justify-content-center">
                        <Col xl={4} lg={4} md={6} sm={6} xs={7} className="pr-0">
                            <Input ref={qRef} name="q" placeholder="Search ..." />
                        </Col>
                        <Col xl={1} lg={2} md={2} sm={3} xs={4} className="pl-0">
                            <Submit type="submit"><SearchIcon /></Submit>
                        </Col>
                    </Row>
                </form>
            </Container>
        </Root>
    );
}

export default R.compose(
    withRouter,
    connect(
        R.applySpec({
            searchRoute: R.path(['app', 'routes', 'search'])
        }),
        R.always({})
    )
)(SearchBox);
