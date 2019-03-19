export default class Model<Props> {

    static routes = null;
    static axios = null;

    props: Props;

    static registerRoutes(entry) {
        Model.routes = entry;
    }

    static registerAxios(entry) {
        Model.axios = entry;
    }

    constructor(props: Props) {
        this.props = props;
    }
}
