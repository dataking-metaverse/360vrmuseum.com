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
    RECAPTCHA_VERIFICATION_REGISTER,
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

// recaptchaVerification
export const registerRecaptchaVerification = register(RECAPTCHA_VERIFICATION_REGISTER);
