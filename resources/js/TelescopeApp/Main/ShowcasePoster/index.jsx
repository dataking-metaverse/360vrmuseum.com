import React, {useEffect, useRef} from "react";

import Scrollable from "../../components/Scrollable";
import {
    Root
} from "./styled";
import type {Showcase} from "../../types";
import useShowcase from "../../hooks/useShowcase";
import useReduxAction from "../../hooks/useReduxAction";
import useReduxState from "../../hooks/useReduxState";
import {updateShowcase as updateShowcaseAction} from "../../redux/actionCreators";

import type {Ref} from "react";
type Props = {|
    showcase: ?Showcase,
|};

function hasSameMid(a: ?Showcase, b: ?Showcase): boolean {
    return Boolean(a) && Boolean(b) && typeof a.mid !== 'undefined' && a.mid === b.mid;
}

const shouldApplyEffect = (menuScrollableRef: Ref, rootRef: Ref) => (
    menuScrollableRef && menuScrollableRef.current instanceof Scrollable &&
    rootRef && rootRef.current instanceof Element
);

export default function ShowcasePoster(props: Props): ?Node {
    const {showcase} = props;
    const activeShowcase = useShowcase();
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const {menuScrollableRef} = useReduxState();
    const rootRef = useRef();
    const active = hasSameMid(showcase, activeShowcase);
    const shouldUpdate = shouldApplyEffect(menuScrollableRef, rootRef);

    useEffect(() => {
        if (active && shouldUpdate) {
            const menuScrollable: Scrollable = menuScrollableRef.current;
            const root = rootRef.current;
            const to = root.getBoundingClientRect().top + menuScrollable.getScrollTop();
            !isNaN(to) && menuScrollable.scrollTo(to);
        }
    }, [active, shouldUpdate]);

    return (
        <Root
            ref={rootRef}
            src={showcase.poster}
            active={active}
            onClick={() => updateShowcase(showcase)}
        />
    );
};
