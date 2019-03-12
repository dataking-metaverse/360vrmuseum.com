import React from "react";
import axios from "axios";
import * as R from "ramda";

import GraphQLModel from "./GraphQLModel";
import Showcase from "./Showcase";

import type {Props as ShowcaseProps} from "./Showcase";

type Props = Array<ShowcaseProps>;


export default class Showcases extends GraphQLModel<Props> implements Iterable<ShowcaseProps> {

    props: Props;

    static FIELDS = Showcase.FIELDS;

    static async get(mids: ?Array<string>): Promise<?Showcases> {
        const {prefix} = Showcases;
        const fieldString = Showcases.FIELDS.join(' ');
        const midsString = JSON.stringify(mids);
        const response = await axios.get(`/${prefix}?query=${`
            query {
                showcases(mids: ${midsString}) {
                    ${fieldString}
                }
            }
        `}`);
        const showcases = R.path(['data', 'data', 'showcases'])(response);
        if (!showcases) { return new Showcases([]); }
        return new Showcases(showcases);
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    [Symbol.iterator](): Iterable<Showcase> {
        return this.props[Symbol.iterator]();
    }
}
