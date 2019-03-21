import React from "react";
import * as R from "ramda";

import RestfulModel from "./RestfulModel";

type Props = {|
    id: number,
    email: string,
    name: string,
|};

type LoginFormData = {
    email: string,
    password: string,
    remember_me?: boolean,
};

export default class User extends RestfulModel<Props> {

    props: Props;

    static FIELDS = [
        'id',
        'email',
        'name',
    ];

    static constructByResponse: {data: {}} => User = R.pipe(
        R.path(['data', 'data']),
        User.constructByData,
    );

    static async login(formData: LoginFormData): Promise<User> | void {
        if (!User.routes) { return null; }
        const route = User.routes['api.auth.login'];
        const response = await User.axios.post(route, formData);
        if (response.status !== 200) { return null; }
        return User.constructByResponse(response);
    }

    static async current(): Promise<User> {
        if (!User.routes) { return null; }
        const route = User.routes['api.auth.user'];
        const response = await User.axios.get(route);
        return User.constructByResponse(response);
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

}
