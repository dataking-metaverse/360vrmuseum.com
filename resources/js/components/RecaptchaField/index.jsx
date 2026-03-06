import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";


type Props = {
    name: string,
    recaptchaVerification: string,
};

function RecaptchaField(props: Props) {
    const {name, recaptchaVerification} = props;
    return (
        <input type="hidden" name={name} value={recaptchaVerification || ''} />
    );
}

RecaptchaField.defaultProps = {
    name: 'recaptcha_token',
};

export default R.compose(
    connect(R.pick(['recaptchaVerification']))
)(RecaptchaField);
