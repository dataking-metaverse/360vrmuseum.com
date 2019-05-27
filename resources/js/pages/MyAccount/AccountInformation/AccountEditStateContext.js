import React from "react";

const AccountEditStateContext = React.createContext<boolean>();

export const Provider = AccountEditStateContext.Provider;
export const Consumer = AccountEditStateContext.Consumer;

export default AccountEditStateContext;
