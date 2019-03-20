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
    static routes = null;
    static axios = null;

    props: Props;

    static subscribe(store: Store): void {
        if (typeof Model.unsubscribeStore === 'function') { Model.unsubscribeStore(); }
        Model.unsubscribeStore = store.subscribe(() => {
            const state: State = store.getState();
            Model.routes = state.app.routes;
            Model.axios = state.axios;
        });
    }

    constructor(props: Props) {
        this.props = props;
    }
}
