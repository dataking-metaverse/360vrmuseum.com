import React from "react";
import axios from "axios";
import * as R from "ramda";
import GraphQLModel from "./GraphQLModel";

import ShowcasePoster from "../components/ShowcasePoster";


export type Props = {
    mid: string,
    main_title: string,
    presented_by: string,
    poster: string,
    thumbnail: string,
    kor_title: string,
    eng_title: string,
    venue: string,
    map_address: string,
    map_name: string,
    description: string,
    youtube_id: string,
    list_of_images: Array<string>,
    guide_information: string,
    is_paid: boolean,
    is_conversation: boolean,
    is_performing: boolean,
    date: string,
    type: string,
    page_url: string,
};


export default class Showcase extends GraphQLModel<Props> {

    props: Props;

    static FIELDS = ['mid', 'main_title', 'presented_by', 'poster', 'thumbnail', 'kor_title', 'eng_title', 'venue', 'map_address', 'map_name', 'description', 'youtube_id', 'list_of_images', 'guide_information', 'is_paid', 'is_conversation', 'is_performing', 'date', 'type', 'page_url' ];

    static async get(mid: string): Promise<?Showcase> {
        const {prefix} = Showcase;
        const fieldsString = Showcase.FIELDS.join(' ');
        const response = await axios.get(`/${prefix}?query=${`
            query {
                showcase(mid: "${mid}") {
                    ${fieldsString}
                }
            }
        `}`);
        const data = R.path(['data', 'data'])(response);
        if (!data) { return null; }
        return new Showcase(data);
    }

    constructor(props: Props) {
        super(props);
    }

    generatePoster() {
        return () => (
            <ShowcasePoster image={this.props.poster} reference={this} />
        );
    }
}
