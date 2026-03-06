import React from "react";

import {
    Item,
} from "./styled";

import type {NavRoutes} from "../useNavRoutes";

type LinksProps = {|
    routes: Array<NavRoutes>,
|};

export default function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}: NavRoutes) => (
        <Item key={name} to={to}>{title}</Item>
    ));
};
