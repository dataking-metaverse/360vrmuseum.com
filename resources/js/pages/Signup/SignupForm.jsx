import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import Checkbox from "../../components/Checkbox";
import RecaptchaField from "../../components/RecaptchaField";
import rawFormData from "../../helpers/rawFormData";
import {registerAccessCredential, registerAxios} from "../../redux/actionCreators/global";
import {Link} from "react-router-dom";
import {Option} from "../../components/Select";
import Select from "../../components/Select";

import type {Axios} from "axios";
import type {Element} from "react";
import getFormData from "../../helpers/getFormData";
import {withRouter} from "react-router";

type Props = {
    text: {
        email: string,
        name: string,
        password: string,
        confirmPassword: string,
        phone: string,
        job: string,
        login: string,
        terms: string,
        agreeTerms: string,
        signup: string,
        jobOptions: Array<string>,
    },
    submitRoute: string,
    loginRoute: string,
    privacyPolicyRoute: string,
    axios: Axios,

    registerAxios: () => {},
    registerAccessCredential: () => {},
};

type InputFieldProps = {
    label: string,
    name: string,
    type?: string,
};

type JobSelectProps = {
    label: string,
    name: string,
    options: Array<string>,
};

const Root = styled(Container)`
    margin-bottom: 10rem;
    padding-top: 8rem;
    padding-bottom: 4rem;
`;

const SignupBoxWrapper = styled.div`
    margin-bottom: 2rem;
`;

const SignupLabel = styled.label`
    display: block;
    color: #575757;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .8rem;
`;

const Signup = styled.input`
    display: block;
    width: 100%;
    height: 4rem;
    border: 2px solid #ddd;
    border-radius: .3rem;
    padding: 0 1.2rem;
    font-size: 1.5rem;
`;

const makeStyledButton = function(func): Element { return styled(func`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.7rem;
    font-weight: 400;
    font-size: 1.5rem;
    border: none;
    border-radius: .4rem;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    text-decoration: none;
    outline: none;
    cursor: pointer;
`)};

const SignupButton = makeStyledButton(styled.button)`
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

const AgreeTerms = styled.span`
    color: #888;
    
    > a {
        color: #333;
        text-decoration: none;
    }
`;

const RecaptchaPolicy = styled.div`
    color: #888;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    > a {
        font-weight: bold;
        color: #888;
        
        &:focus, &:visited {
            outline: none;
            color: #888;
        }
    }
`;

function InputField(props: InputFieldProps) {
    const {label, name, type = 'text'} = props;
    return (
        <SignupBoxWrapper>
            <SignupLabel htmlFor={name}>{label}</SignupLabel>
            <Signup name={name} type={type} />
        </SignupBoxWrapper>
    );
}

const jobOptionMap = R.pipe(
    R.mapObjIndexed((value, key) => (
        <Option key={key} value={key}>{value}</Option>
    )),
    R.values
);

function JobSelect(props: JobSelectProps): Element {

    return (
        <div className="mb-5">
            <SignupLabel htmlFor={props.name}>{props.label}</SignupLabel>
            <Select name={props.name}>
                {jobOptionMap(props.options)}
            </Select>
        </div>
    )
}

function LoginForm(props: Props) {
    const {text, submitRoute, loginRoute, privacyPolicyRoute, axios} = props;

    function termsText() {
        const {terms, agreeTerms} = text;
        return agreeTerms.replace('{termsLink}', `<a href="${privacyPolicyRoute}" target="_blank">${terms}</a>`);
    }

    async function onSubmit(event: Event) {
        event.preventDefault();
        const formData = getFormData(event);

        // NODE : the axios instance will handle the redirecting and the popup message for successfully create user
        // TODO : handling error
        await axios.post(submitRoute, formData);
    }

    return (
        <Root>
            <form onSubmit={onSubmit}>
                <Row className="justify-content-center">
                    <Col xl={4} md={6} sm={7} xs={10}>
                        <RecaptchaField />
                        <InputField label={text.email} name="email" />
                        <InputField label={text.name} name="name" />
                        <InputField label={text.password} name="password" type="password" />
                        <InputField label={text.confirmPassword} name="password_confirmation" type="password" />
                        <InputField label={text.phone} name="phone" />

                        <JobSelect
                            label={text.job}
                            name="job"
                            options={text.jobOptions}
                        />

                        <div className="mb-4">
                            <Checkbox name="accept_terms" type="checkbox" />
                            <AgreeTerms className="pl-4" dangerouslySetInnerHTML={{__html: termsText()}} />
                        </div>

                        <RecaptchaPolicy>
                            This site is protected by reCAPTCHA and the Google&nbsp;
                            <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
                            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                        </RecaptchaPolicy>

                        <Row>
                            <Col md={6} xs={12} className="mb-3">
                                <SignupButton>{text.signup}</SignupButton>
                            </Col>
                            <Col md={6} xs={12}>
                                <RegisterButton to={loginRoute}>{text.login}</RegisterButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        </Root>
    );
}

export default R.compose(
    withRouter,
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'signup', 'signupForm']),
            submitRoute: R.path(['app', 'routes', 'api.auth.signup']),
            loginRoute: R.path(['app', 'routes', 'login']),
            privacyPolicyRoute: R.path(['app', 'routes', 'privacy-policy']),
            axios: R.prop('axios'),
        }),
        R.applySpec({
            registerAxios,
            registerAccessCredential,
        })
    )
)(LoginForm);
