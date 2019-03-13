import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import Checkbox from "../../../components/Checkbox";

type Props = {
    text: Array<string>,
};

const Root = styled(Container)`
    margin-bottom: 10rem;
    padding-top: 8rem;
    padding-bottom: 4rem;
`;

const InputBoxWrapper = styled.div`
    margin-bottom: 2rem;
`;

const InputLabel = styled.label`
    display: block;
    color: #575757;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .8rem;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 4rem;
    border: 2px solid #ddd;
    border-radius: .3rem;
    padding: 0 1.2rem;
    font-size: 1.5rem;
`;

const Button = styled.button`
    vertical-align: middle;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    width: 100%;
    height: 4.7rem;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border: none;
    border-radius: .4rem;
    outline: none;
    &.loginButton {
        background-color: #3ba1da;
        color: #fff;
        &:hover {
            background-color: #44b0ec;
        }
    }
    &.registerButton {
        background-color: #eee;
        color: #666;
        &:hover {
            background-color: #e5e5e5;
        }
    }
`;

const ForgotPassword = styled.div`
    text-align: center;
    cursor: pointer;
    color: #888;
    line-height: 2.5rem;
    font-weight: 100;
    &:hover {
        text-decoration: underline;
    }
`;

const KeepMeSignedText = styled.span`
    color: #888;
`;

function LoginForm(props: Props) {
    const {
        label: [useridText, userpwText],
        text: [keepsignText, loginButtonText, registerButtonText, forgotPasswordText],
    } = props;

    return (
        <Root>
            <Row className="justify-content-center">
                <Col xl={4} md={6} sm={7} xs={10}>
                    <InputBoxWrapper>
                        <InputLabel>{useridText}</InputLabel>
                        <Input />
                    </InputBoxWrapper>
                    <InputBoxWrapper>
                        <InputLabel>{userpwText}</InputLabel>
                        <Input type="password" />
                    </InputBoxWrapper>
                    <div className="mb-5">
                        <div className="mb-3">
                            <Checkbox onChange="" type="checkbox" />
                            <KeepMeSignedText className="pl-4">{keepsignText}</KeepMeSignedText>
                        </div>
                        <Row>
                            <Col md={6} xs={12} className="mb-3">
                                <Button className="loginButton">{loginButtonText}</Button>
                            </Col>
                            <Col md={6} xs={12}>
                                <Button className="registerButton">{registerButtonText}</Button>
                            </Col>
                        </Row>
                    </div>
                    <ForgotPassword>{forgotPasswordText}</ForgotPassword>
                </Col>
            </Row>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        label: R.path(['lang', 'pages', 'login', 'loginForm', 'label']),
        text: R.path(['lang', 'pages', 'login', 'loginForm', 'text']),
    }))
)(LoginForm);
