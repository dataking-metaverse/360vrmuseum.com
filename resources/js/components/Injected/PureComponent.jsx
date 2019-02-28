import React from "react";

export default class PureComponent<Props, InjectedProps, State = void> extends React.PureComponent<Props & InjectedProps, State> {}
