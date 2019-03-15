import React from "react";
import axios from "axios";
import * as R from "ramda";

import params from "../helpers/params";
import GraphQLModel from "./GraphQLModel";
import Showcase from "./Showcase";

import type {Props as ShowcaseProps} from "./Showcase";

type Props = Array<ShowcaseProps>;


export default class Showcases extends GraphQLModel<Props> implements Iterable<ShowcaseProps> {

    props: Props;

    static FIELDS = Showcase.FIELDS;

    static async get(mids: ?Array<string>): Promise<?Showcases> {
        const response = await axios.get('/api/showcases', {params: {mids}});
        const showcases = R.path(['data', 'data'])(response);
        if (!showcases) { return new Showcases([]); }
        return new Showcases(showcases.map(R.construct(Showcase)));
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    [Symbol.iterator](): Iterable<Showcase> {
        return this.props[Symbol.iterator]();
    }
}
