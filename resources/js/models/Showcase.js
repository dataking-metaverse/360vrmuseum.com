import React from "react";
import axios from "axios";
import * as R from "ramda";
import RestfulModel from "./RestfulModel";

import ShowcasePoster from "../components/ShowcasePoster";
import ShowcasePosterLink from "../components/ShowcasePosterLink";
import ShowcaseCard from "../components/ShowcaseCard";
import ShowcaseThumbnail from "../components/ShowcaseThumbnail";
import Showcases from "./Showcases";


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

    static constructByData: {} => Showcase = R.when(R.complement(R.isNil), R.construct(Showcase));

    static constructByResponse: {data: {}} => Showcase = R.pipe(
        R.path(['data', 'data']),
        Showcase.constructByData,
    );

    static async get(mid: string): Promise<Showcase> {
        const route = Showcase.routes['api.showcase'];
        const response = await axios.get(route, {params: {mid}});
        return Showcase.constructByResponse(response);
    }

    static async byPresentedBy(presentedBy: string): Promise<Showcases> {
        const route = Showcase.routes['api.showcase.by-presented-by'];
        const response = await axios.get(route, {params: {presented_by: presentedBy}});
        return Showcases.constructByResponse(response); // NOTE : the response data is a list of showcases
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    getRelated: () => Promise<Showcase> = async () => await Showcase.byPresentedBy(this.props.presented_by);

    route = () => Showcase.routes['showcase'].replace(':mid', this.props.mid);

    // TODO : these methods should actually be implemented in super class
    getAttribute: (attr: string) => any = attr => this.props[attr];
    toObject: () => Props = () => ({...this.props});

    // components
    generatePoster = () => () => <ShowcasePoster showcase={this} />;
    generatePosterLink = () => () => <ShowcasePosterLink showcase={this} />;
    generateCard = () => () => <ShowcaseCard showcase={this} />;
    generateThumbnail = () => () => <ShowcaseThumbnail showcase={this} />;
}
