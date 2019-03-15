import React from "react";
import axios from "axios";
import * as R from "ramda";
import RestfulModel from "./RestfulModel";

import params from "../helpers/params";
import ShowcasePoster from "../components/ShowcasePoster";
import ShowcaseCard from "../components/ShowcaseCard";


export type Props = {
    mid: string,
    main_title: string,
    location: string,
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


export default class Showcase extends RestfulModel<Props> {

    props: Props;

    static FIELDS = ['mid', 'main_title', 'location', 'presented_by', 'poster', 'thumbnail', 'kor_title', 'eng_title', 'venue', 'map_address', 'map_name', 'description', 'youtube_id', 'list_of_images', 'guide_information', 'is_paid', 'is_conversation', 'is_performing', 'date', 'type', 'page_url' ];

    static async get(mid: string): Promise<?Showcase> {
        const route = Showcase.routes['api.showcase'];
        const response = await axios.get(route, {params: {mid}});
        const data = R.path(['data', 'data'])(response);
        if (!data) { return null; }
        return new Showcase(data);
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    generatePoster = () => {
        return () => (
            <ShowcasePoster showcase={this} />
        );
    };

    generateCard = () => {
        return () => (
            <ShowcaseCard showcase={this} />
        );
    };

    getAttribute(attr: string) {
        return this.props[attr];
    }
}
