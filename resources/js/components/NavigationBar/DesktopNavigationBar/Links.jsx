import React from "react";
import {
    Item,
} from "./styled";

import type {RouteProps} from "../navigationBarDecorators";

type LinksProps = {
    routes: Array<RouteProps>,
};

export default function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}) => (
        <Item key={name} to={to}>{title}</Item>
    ));
};
