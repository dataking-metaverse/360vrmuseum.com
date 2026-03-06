import Model from "./Model";


export type Props = {
    message: string,
    apperance: string,
};

export default class Message extends Model {
    constructor(props: Props) {
        super(props);
    }

    get message() { return this.props.message; }
    get appearance() { return this.props.appearance || 'success'; }
}
