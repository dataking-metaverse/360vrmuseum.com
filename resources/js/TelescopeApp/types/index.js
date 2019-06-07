export type State = any;

export type Action = {
    type: string,
    value?: any,
};

export type App = {
    routes: {[string]: string},
};

export type ImageItem = {|
    original: string,
    thumb: string,
|};

export type ListOfImages = Array<ImageItem>;

export type Showcase = {|
    mid: string,
    main_title: string,
    location: string,
    presented_by: string,
    showcase_ref: string,
    poster: string,
    thumbnail: string,
    kor_title: string,
    eng_title: string,
    venue: string,
    map_address: string,
    map_name: string,
    description: string,
    youtube_id: string,
    list_of_images: ListOfImages,
    guide_information: string,
    is_paid: boolean,
    is_conversation: boolean,
    is_performing: boolean,
    date: string,
    type: string,
    page_url: string,
    statistics: {
        impressions: number,
        visits: number,
        unique_visitors: number,
    },
|};

export type Showcases = Array<Showcase>;

export type ShowcasesGroup = {
    [string]: Showcases,
};
