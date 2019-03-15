export default class Model<Props> {

    static routes = null;

    props: Props;

    static registerRoutes(entry) {
        Model.routes = entry;
    }

    constructor(props: Props) {
        this.props = props;
    }
}
