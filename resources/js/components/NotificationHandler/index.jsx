import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {ToastProvider, ToastConsumer} from "react-toast-notifications";

import {removeFirstMessage} from "../../redux/actionBuilders/global";

import type {Node} from "react";
import type {Axios} from "axios";
import noSSR from "../../decorators/noSSR";


type Props = {||};

type NotificationHandlerInnerProps = {
    locale: string,
    axios: Axios,
    langRoute: string,
    registerLang: ({}) => void,
    content: any,
    toastManager: any,
};

@connect(
    R.pick(['messages']),
    R.applySpec({removeFirstMessage})
)
class NotificationHandlerInner extends React.Component<NotificationHandlerInnerProps> {
    shouldComponentUpdate(nextProps) { return !!(nextProps.messages[0] && nextProps.messages[0] !== this.props.messages[0]); }
    componentDidMount() { this.effect(); }
    componentDidUpdate() { this.effect(); }
    async effect() {
        const [message] = this.props.messages;
        this.props.removeFirstMessage();
        if (message) {
            this.props.toastManager.add(message.message, {
                appearance: message.appearance,
                autoDismiss: true,
            });
        }
    }
    render() { return null; }
}

function NotificationHandler(props: Props) {
    return (
        <ToastProvider placement="bottom-left">
            <ToastConsumer>
                {toastManager => (
                    <NotificationHandlerInner toastManager={toastManager} />
                )}
            </ToastConsumer>
        </ToastProvider>
    );
}


export default R.compose(
    noSSR
)(NotificationHandler);
