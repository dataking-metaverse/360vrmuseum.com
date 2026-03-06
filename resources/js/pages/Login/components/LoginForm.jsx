import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Checkbox from "../../../components/Checkbox";
import {registerUser} from "../../../redux/actionCreators/global";
import getFormData from "../../../helpers/getFormData";
import User from "../../../models/User";

import type {Axios} from "axios";

type Props = {
    text: {
        userId: string,
        password: string,
        keepSignIn: string,
        loginButton: string,
        registerButton: string,
        forgotPassword: string,
    },
    submitRoute: string,
    signupRoute: string,
    axiosInstance: Axios,
    registerAxios: () => {},
    registerUser: () => {},
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

const makeStyledButton = function(func) { return styled(func`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    width: 100%;
    height: 4.7rem;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border: none;
    border-radius: .4rem;
    outline: none;
    text-decoration: none;
`)};

const LoginButton = makeStyledButton(styled.button)`
    background-color: #3ba1da;
    color: #fff;

    &:hover {
        background-color: #44b0ec;
    }
`;

const RegisterButton = makeStyledButton(styled(Link))`
    background-color: #eee;
    color: #666;
    &:hover {
        background-color: #e5e5e5;
    }
`;

const ForgotPassword = styled(Link)`
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
    const {text, signupRoute, registerUser, forgotPasswordRoute} = props;

    async function onSubmit(event: Event) {
        event.preventDefault();
        const formData = getFormData(event);
        formData.remember_me = !!formData.remember_me;
        const user = await User.login(formData);

        // TODO : handle unauthorized
        if (user === null) { /** TODO **/ }

        registerUser(user);
    }

    return (
        <Root>
            <form onSubmit={onSubmit}>
                <Row className="justify-content-center">
                    <Col xl={4} md={6} sm={7} xs={10}>
                        <InputBoxWrapper>
                            <InputLabel>{text.userId}</InputLabel>
                            <Input name="email" />
                        </InputBoxWrapper>
                        <InputBoxWrapper>
                            <InputLabel>{text.password}</InputLabel>
                            <Input name="password" type="password" />
                        </InputBoxWrapper>
                        <div className="mb-5">
                            <div className="mb-3">
                                <Checkbox name="remember_me" type="checkbox" />
                                <KeepMeSignedText className="pl-4">{text.keepSignIn}</KeepMeSignedText>
                            </div>
                            <Row>
                                <Col md={6} xs={12} className="mb-3">
                                    <LoginButton>{text.loginButton}</LoginButton>
                                </Col>
                                <Col md={6} xs={12}>
                                    <RegisterButton to={signupRoute}>{text.registerButton}</RegisterButton>
                                </Col>
                            </Row>
                        </div>
                        <ForgotPassword to={forgotPasswordRoute}>{text.forgotPassword}</ForgotPassword>
                    </Col>
                </Row>
            </form>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'login', 'loginForm']),
            submitRoute: R.path(['app', 'routes', 'api.auth.login']),
            signupRoute: R.path(['app', 'routes', 'signup']),
            forgotPasswordRoute: R.path(['app', 'routes', 'forgot-password']),
            axiosInstance: R.prop('axios'),
        }),
        R.applySpec({
            registerUser,
        })
    )
)(LoginForm);
