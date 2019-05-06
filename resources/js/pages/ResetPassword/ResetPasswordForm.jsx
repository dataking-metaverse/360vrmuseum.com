import React, {useState} from "react";
import * as R from "ramda";
import Axios from "axios";
import styled from "styled-components";
import {Col, Container, Row} from "styled-bootstrap-grid";
import RecaptchaField from "../../components/RecaptchaField";
import {connect} from "react-redux";
import getFormData from "../../helpers/getFormData";

type Props = {
    token: string,
    text: {
        newPassword: string,
        confirmPassword: string,
        submitButton: string,
    },
    axios: Axios,
    passwordResetUrl: string,
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

const SubmitButton = makeStyledButton(styled.button)`
    background-color: #3ba1da;
    color: #fff;
    opacity: ${({disabled}) => disabled ? '.4' : '1'};

    &:hover {
        background-color: #44b0ec;
    }
`;

function ResetPasswordForm(props: Props) {
    const {token, text, axios, passwordResetUrl} = props;
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onSubmit = R.pipe(
        R.tap(R.invoker(0, 'preventDefault')),
        getFormData,
        R.curryN(2, axios.post)(passwordResetUrl),
    );

    return (
        <Root>
            <form method="POST" action="" onSubmit={onSubmit}>
                <RecaptchaField />
                <input type="hidden" name="token" value={token} />
                <Row className="justify-content-center">
                    <Col xl={4} md={6} sm={7} xs={10}>
                        <InputBoxWrapper>
                            <InputLabel>{text.email}</InputLabel>
                            <Input name="email" />
                        </InputBoxWrapper>
                        <InputBoxWrapper>
                            <InputLabel>{text.newPassword}</InputLabel>
                            <Input name="password" type="password" />
                        </InputBoxWrapper>
                        <InputBoxWrapper>
                            <InputLabel>{text.confirmPassword}</InputLabel>
                            <Input name="password_confirmation" type="password" />
                        </InputBoxWrapper>
                        <div className="mb-5">
                            <Row>
                                <Col md={6} xs={12} className="mb-3">
                                    <SubmitButton disabled={buttonDisabled}>{text.submitButton}</SubmitButton>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </form>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'reset-password', 'form']),
        axios: R.prop('axios'),
        passwordResetUrl: R.path(['app', 'routes', 'password-reset.reset']),
    }))
)(ResetPasswordForm);
