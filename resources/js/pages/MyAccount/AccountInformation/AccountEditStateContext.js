import React from "react";

type ContentType = [boolean, (newState: boolean) => void];

const AccountEditStateContext = React.createContext<?ContentType>();

export const Provider = AccountEditStateContext.Provider;
export const Consumer = AccountEditStateContext.Consumer;

export default AccountEditStateContext;
