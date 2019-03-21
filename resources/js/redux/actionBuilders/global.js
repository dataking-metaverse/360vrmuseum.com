import * as R from "ramda";
import axios from "axios";
import register from "../functions/register";
import registerEmpty from "../functions/registerEmpty";
import {
    LANG_REGISTER,
    ACCESS_CREDENTIAL_REGISTER,
    AXIOS_REGISTER,
    MESSAGES_PUSH,
    MESSAGES_REMOVE_FIRST,
    REDIRECT_PUSH,
    REDIRECT_CLEAR,
    USER_REGISTER,
    USER_CLEAR,
} from "../actionTypes";

export const registerLang = register(LANG_REGISTER);

export const registerAxios = register(AXIOS_REGISTER);
export const registerAccessCredential = register(ACCESS_CREDENTIAL_REGISTER);

export const pushMessage = register(MESSAGES_PUSH);
export const removeFirstMessage = registerEmpty(MESSAGES_REMOVE_FIRST);

export const pushRedirect = register(REDIRECT_PUSH);
export const clearRedirect = registerEmpty(REDIRECT_CLEAR);


export const registerUser = register(USER_REGISTER);
export const clearUser = registerEmpty(USER_CLEAR);

export const initialUserAccessCredential = dispatch => () => {
    const dispatchRegisterAccessCredential = registerAccessCredential(dispatch);
    const dispatchRegisterAxios = registerAxios(dispatch);
    const dispatchPushMessage = pushMessage(dispatch);
    const dispatchPushRedirect = pushRedirect(dispatch);

    dispatchRegisterAccessCredential({});
    dispatchRegisterAxios(axios.create({
        header: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        transformResponse: [R.pipe(
            JSON.parse,
            R.tap(R.when(
                R.has('message'),
                R.pipe(
                    R.prop('message'),
                    dispatchPushMessage
                )
            )),
            R.tap(R.when(
                R.has('redirect'),
                R.pipe(
                    R.prop('redirect'),
                    dispatchPushRedirect
                )
            ))
        )],
    }));
};
