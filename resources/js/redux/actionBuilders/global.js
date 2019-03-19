import register from "../functions/register";
import {ACCESS_CREDENTIAL_REGISTER, AXIOS_REGISTER} from "../actionTypes";

export const registerAxios = register(AXIOS_REGISTER);
export const registerAccessCredential = register(ACCESS_CREDENTIAL_REGISTER);
