import React from "react";
import * as R from "ramda";

import useReduxState from "~/hooks/useReduxState";
import LogoutButton from "./LogoutButton";
import {
    Item,
} from "./styled";

type Props = {|  |};
type LoginButtonProps = {|  |};

const useLoginRoute = R.pipe(
    useReduxState,
    R.applySpec({
        title: R.path(['lang', 'navigation', 'login', 'title']),
        to: R.path(['app', 'routes', 'login']),
    })
);

const useShowNav = R.pipe(
    useReduxState,
    R.path(['config', 'navigationBar', 'showAuth']),
);

function LoginButton(props: LoginButtonProps) {
    const {to, title} = useLoginRoute();
    return <Item to={to}>{title}</Item>;
}

export default function AuthButtons(props: Props) {
    const {user} = useReduxState();
    const show = useShowNav();
    if (!show) { return null; }
    if (!user) { return <LoginButton />; }
    return <LogoutButton />;
}
