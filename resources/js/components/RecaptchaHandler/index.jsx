import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as R from "ramda";

import useReduxAction from "~/hooks/useReduxAction";
import useReduxState from "~/hooks/useReduxState";
import * as actions from "~/redux/actionCreators/global";


type Props = {|  |};

const useRecaptchaSiteKey = R.pipe(
    useReduxState,
    R.path(['config', 'recaptcha', 'siteKey'])
);

export default function RecaptchaHandler(props: Props) {
    const recaptchaSiteKey = useRecaptchaSiteKey();
    const registerRecaptchaVerification = useReduxAction(actions.registerRecaptchaVerification);

    const effect = () => {
        const {grecaptcha} = window;
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(async () => {
                const token = await grecaptcha.execute(recaptchaSiteKey, {action: 'homepage'});
                registerRecaptchaVerification(token);
            });
        } else {
            window.requestAnimationFrame(effect);
        }
    };

    useEffect(() => {
        effect();
    }, []);

    return null;
}
