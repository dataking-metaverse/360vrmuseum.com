import React from "react";
import * as R from "ramda";

import RestfulModel from "./RestfulModel";

type Props = {|
    email: string,
    name: string,
    types: string,
|};

type LoginFormData = {
    email: string,
    password: string,
    remember_me?: boolean,
};

const hasCommon = R.curry((arr1, arr2) => arr1.some(R.includes(R.__, arr2)));


export default class User extends RestfulModel<Props> {

    props: Props;

    static constructByData: (props: Props) => Promise<User> = R.construct(User);

    static constructByResponse: {data: {}} => Promise<User> = R.pipe(
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

    static isEveryoneCan: (privilegeName: string) => boolean = R.pipe(
        R.append(R.__, ['state', 'config', 'privileges']),
        R.path(R.__, User),
        R.converge(R.and, [Array.isArray, R.includes('*')])
    );

    static hasPrivilegeSafe(user: ?User, privilegeName: string): boolean {
        if (User.isEveryoneCan(privilegeName)) { return true; }
        return user ? user._hasPrivilegeMarked(privilegeName) : false;
    }

    static canViewShowcases = user => User.isEveryoneCan('viewShowcases') || (user && user.hasPrivilege('viewShowcases'));

    static isCurrentUser(user: User) {
        const currentUserEmail = R.pipe(
            R.always(User),
            R.path(['state', 'user', 'props', 'email']),
        )();
        return currentUserEmail === user.getAttribute('email');
    }

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    hasPrivilege(privilegeName: string): boolean {
        if (User.isEveryoneCan(privilegeName)) { return true; }
        return this._hasPrivilegeMarked(privilegeName);
    }

    _hasPrivilegeMarked(privilegeName: string): boolean {
        const path = ['state', 'config', 'privileges', privilegeName];
        const privilege = R.path(path)(User);
        return Array.isArray(privilege) && privilege.some(R.includes(R.__, this.props.types));
    }

}
