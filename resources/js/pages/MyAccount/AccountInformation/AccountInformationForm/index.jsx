import React from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import * as R from "ramda";
import {connect} from "react-redux";

import AccountInformationItem from "../AccountInformationItem";


type Props = {|
    recaptchaVerification?: string,
    user: {
        email: string,
        name: string,
        phone: string,
        job: string,
    },
    onSubmitDone: () => void,
    lang: {|
        name: string,
        phone: string,
        job: string,
    |},

|};

type State = {|
    mounted: boolean,
    email: ?string,
    phone: ?string,
    job: ?string,
|};

type SavableFormData = {|
    email: string,
    phone: string,
    job: string,
|};

const CardBodyInner = styled.form`
    margin-right: -2.3rem;
    
    ${media.sm`
        padding-left: 9.8rem;
    `}
`;

const getEventValue = R.path<string, string>(['target', 'value']);

const pipeEmpty = (...args) => R.unary(R.pipe(...args));

@connect(R.applySpec({
    recaptchaVerification: R.prop('recaptchaVerification'),
    submitRoute: R.path(['app', 'routes', 'api.my-account.account-information']),
    axios: R.prop('axios'),
    lang: R.path(['lang', 'pages', 'my-account', 'accountInformation', 'form']),
    jobOptions: R.path(['lang', 'pages', 'signup', 'signupForm', 'jobOptions']),
}), R.always({}), null, {forwardRef: true})
export default class AccountInformationForm extends React.Component<Props, State> {

    state = {
        mounted: false,
        email: null,
        phone: null,
        job: null,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const newState = {};
        if (!prevState.mounted) {
            Object.assign(newState, R.pick(['phone', 'job'])(nextProps.user));
            newState.mounted = true;
        }
        return newState;
    }

    getData: () => SavableFormData = pipeEmpty(
        R.always(this),
        R.prop('state'),
        R.pick(['phone', 'job']),
    );

    getRoute: () => string = pipeEmpty(
        R.always(this),
        R.path(['props', 'submitRoute'])
    );

    getAxios = pipeEmpty(
        R.always(this),
        R.path(['props', 'axios']),
    );

    save = async () => {
        const axios = this.getAxios();
        const route = this.getRoute();
        const data = this.getData();
        data.recaptcha_token = this.props.recaptchaVerification;
        axios.post(route, data).then(() => {
            this.props.onSubmitDone();
        });

    };

    // setters
    setterCreator = (stateKey: string) => (event: Event) => this.setState({ [stateKey]: getEventValue(event) });
    setPhone = this.setterCreator('phone');
    setJob = this.setterCreator('job');

    render() {
        const {user, lang, jobOptions} = this.props;
        const {phone, job} = this.state;
        const {setPhone, setJob} = this;
        return (
            <CardBodyInner>
                <AccountInformationItem title={lang.email} name="email" value={user.email} />
                <AccountInformationItem title={lang.name} name="name" value={user.name} />
                <AccountInformationItem title={lang.phone} name="phone" value={phone} onChange={setPhone} editable />
                <AccountInformationItem
                    title={lang.job}
                    name="job"
                    value={job}
                    selectOptions={jobOptions}
                    onChange={setJob}
                />
            </CardBodyInner>
        );
    }
}
