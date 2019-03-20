import React from "react";
import * as R from "ramda";

import RestfulModel from "./RestfulModel";
import Showcase from "./Showcase";
import CommentItem from "../components/CommentItem";

export type Props = {|
    id: number,
    user_id: number,
    mid: string,
    parent_id: string,
    content: string,
    subscribe: string,
    user: string,
|};

export default class Comment extends RestfulModel<Props> {

    props: Props;

    static FIELDS = [
        'id',
        'user_id',
        'mid',
        'parent_id',
        'content',
        'subscribe',
        'user',
    ];

    static constructByData: {} => Comment = R.when(R.complement(R.isNil), R.construct(Comment));

    static constructByResponse: {data: {}} => Comment = R.pipe(
        R.path(['data', 'data']),
        Comment.constructByData,
    );

    static constructByResponseList: {data: {}} => Array<Comment> = R.pipe(
        R.path(['data', 'data']),
        R.map(R.construct(Comment)),
    );

    static async byShowcase(showcase: Showcase): Promise<Array<Comment>> {
        if (!Comment.routes) { return null; }
        const route = Comment.routes['api.comment.by-showcase'];
        const response = await Showcase.axios.get(route, {params: {mid: showcase.getAttribute('mid')}});
        return Comment.constructByResponseList(response); // NOTE : the response data is a list of showcases
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    getCommentItem = () => () => <CommentItem comment={this} />;

    getAttribute = key => this.props[key];
}
