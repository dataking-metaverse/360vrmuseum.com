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
`;

const Form = styled.form`
    position: relative;
    height: 5rem;
    width: 100%;
    
    > * {
        vertical-align: top;
    }
`;

const InputWrap = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding-right: 5rem;
`;

const Input = styled.input`
    position: relative;
    width: 100%;
    height: 100%;
    color: #aaa9a9;
    font-size: 1.3rem;
    border: 1px solid #d2d2d2;
    padding: .8rem 1.5rem;
    background-color: #fff;
`;

const Submit = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    height: 100%;
    background: #000;
    border: none;
    border-radius: 0;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
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
            <Form onSubmit={onSubmit}>
                <InputWrap>
                    <Input ref={qRef} name="q" placeholder="Search ..." />
                </InputWrap>
                <Submit type="submit"><SearchIcon /></Submit>
            </Form>
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
