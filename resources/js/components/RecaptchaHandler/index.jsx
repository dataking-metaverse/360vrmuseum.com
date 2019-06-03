import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import {registerRecaptchaVerification} from "../../redux/actionCreators/global";


type Props = {
    recaptchaSiteKey: string,
    registerRecaptchaVerification: function,
};

@connect(R.applySpec({
    recaptchaSiteKey: R.path(['config', 'recaptcha', 'siteKey']),
}), R.applySpec({registerRecaptchaVerification}))
export default class RecaptchaHandler extends React.Component<Props> {
    componentDidMount() { this.listenRecaptchaCallback(); }
    listenRecaptchaCallback = () => {
        const {recaptchaSiteKey} = this.props;
        const {grecaptcha} = window;
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(async () => {
                const token = await grecaptcha.execute(recaptchaSiteKey, {action: 'homepage'});
                this.props.registerRecaptchaVerification(token);
            });
        } else {
            window.requestAnimationFrame(this.listenRecaptchaCallback);
        }
    };
    render() { return null; }
}
