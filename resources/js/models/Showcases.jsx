import React from "react";
import * as R from "ramda";

import RestfulModel from "./RestfulModel";
import Showcase from "./Showcase";

import type {Props as ShowcaseProps} from "./Showcase";

type Props = Array<ShowcaseProps>;

type ShowcasesResponse = {
    data: {
        data: {},
    }
}


export default class Showcases extends RestfulModel<Props> implements Iterable<ShowcaseProps> {

    props: Props;

    static FIELDS = Showcase.FIELDS;

    static constructByResponse: (response: ShowcasesResponse) => Showcases = R.pipe(
        R.path(['data', 'data']),
        R.ifElse(
            R.complement(R.isNil),
            R.pipe(
                R.map(R.construct(Showcase)),
                R.construct(Showcases)
            ),
            () => new Showcases([])
        )
    );

    static async search(query: string): Promise<Showcases> {
        const route = Showcases.routes['api.showcases.search'];
        const response = await Showcases.axios.get(route, {params: {q: query}});
        return Showcases.constructByResponse(response);
    };

    static async get(mids: Array<string>): Promise<?Showcases> {
        const route = Showcases.routes['api.showcases'];
        const response = await Showcases.axios.get(route, {params: {mids}});
        return Showcases.constructByResponse(response);
    }

    static async byPresentedBys(presentedBys: Array<string>): Promise<?Array<Showcases>> {
        const route = Showcases.routes['api.showcases.by-presented-bys'];
        const response = await Showcases.axios.get(route, {params: {presented_bys: presentedBys}});
        return R.pipe(
            R.path(['data', 'data']),
            R.mapObjIndexed(R.pipe(
                R.map(R.construct(Showcase)),
                R.construct(Showcases)
            ))
        )(response);
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    [Symbol.iterator](): Iterable<Showcase> {
        return this.props[Symbol.iterator]();
    }

    toArray() {
        return [...this];
    }
}
