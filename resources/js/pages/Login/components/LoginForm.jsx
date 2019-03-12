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
        background: #3ba1da;
        color: #fff;
    }
    &.registerButton {
        background: #eee;
        color: #666;
    }
`;

const ForgotPassword = styled.div`
    text-align: center;
    cursor: pointer;
    color: #888;
    line-height: 2.5rem;
    font-weight: 200;
    &:hover {
        text-decoration: underline;
    }
`;

const KeepMeSignedText = styled.span`
    color: #888;
`;

function onChange(event) {
    Checkbox();
}

function LoginForm(props: Props) {
    const {} = props;

    return (
        <Root>
            <Row className="justify-content-center">
                <Col md={6}>
                    <InputBoxWrapper>
                        <InputLabel>아이디 또는 이메일</InputLabel>
                        <Input/>
                    </InputBoxWrapper>
                    <InputBoxWrapper>
                        <InputLabel>비밀번호</InputLabel>
                        <Input type="password"/>
                    </InputBoxWrapper>
                    <div className="mb-5">
                        <div className="mb-3">
                            <Checkbox onChange={onChange} type="checkbox" />
                            <KeepMeSignedText className="pl-3">Keep me signed in</KeepMeSignedText>
                        </div>
                        <Row>
                            <Col md={6} className="mb-sm-3">
                                <Button className="loginButton">로그인</Button>
                            </Col>
                            <Col md={6}>
                                <Button className="registerButton">회원가입</Button>
                            </Col>
                        </Row>
                    </div>
                    <ForgotPassword>Forgot your password?</ForgotPassword>
                </Col>
            </Row>
        </Root>
    );
}

export default R.compose(
    R.identity
    // connect(R.applySpec({
    //     label: R.path(['lang', 'pages', 'contact-us', 'contactForm', 'label']),
    // }))
)(LoginForm);
