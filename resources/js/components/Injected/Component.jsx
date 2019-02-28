import React from "react";

export default class Component<Props, InjectedProps, State = void> extends React.Component<Props & InjectedProps, State> {}
