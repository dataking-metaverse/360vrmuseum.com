import {Store} from "redux";
import type {Axios} from "axios";


type State = {
    app: {
        routes: {

        },
    },
    axios: Axios,
};


export default class Model<Props> {

    static unsubscribeStore = null;
    static state = null;
    static routes = null;
    static axios = null;

    props: Props;

    static subscribe(store: Store): void {
        if (typeof Model.unsubscribeStore === 'function') { Model.unsubscribeStore(); }
        const listener = () => {
            const state: State = store.getState();
            Model.state = state;
            Model.routes = state.app.routes;
            Model.axios = state.axios;
        };
        listener();
        Model.unsubscribeStore = store.subscribe(listener);
    }

    constructor(props: Props) {
        this.props = props;
    }

    getAttribute = key => this.props[key];
}
