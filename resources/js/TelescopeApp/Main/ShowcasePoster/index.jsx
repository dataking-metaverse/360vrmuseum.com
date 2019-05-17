import React, {useEffect, useRef} from "react";
import * as R from "ramda";

import Scrollable from "../../components/Scrollable";
import {
    Root
} from "./styled";
import type {Showcase} from "../../types";
import useShowcase from "../../hooks/useShowcase";
import useReduxAction from "../../hooks/useReduxAction";
import useReduxState from "../../hooks/useReduxState";
import {updateShowcase as updateShowcaseAction, emptyShowcase as emptyShowcaseAction} from "../../redux/actionCreators";

import type {Ref} from "react";
type Props = {|
    showcase: ?Showcase,
|};

function hasSameMid(a: ?Showcase, b: ?Showcase): boolean {
    return Boolean(a) && Boolean(b) && typeof a.mid !== 'undefined' && a.mid === b.mid;
}

const shouldApplyEffect = (menuScrollableRef: Ref, showcaseIframeRef: Ref, rootRef: Ref) => (
    menuScrollableRef && menuScrollableRef.current instanceof Scrollable &&
    showcaseIframeRef && showcaseIframeRef.current instanceof Element &&
    rootRef && rootRef.current instanceof Element
);

const rectTop: (element: Element) => number = R.ifElse(
    R.propIs(Element, 'current'),
    R.pipe(
        R.prop('current'),
        R.invoker(0, 'getBoundingClientRect'),
        R.prop('top')
    ),
    R.always(0)
);

export default function ShowcasePoster(props: Props): ?Node {
    const {showcase} = props;
    const activeShowcase = useShowcase();
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const emptyShowcase = useReduxAction(emptyShowcaseAction);
    const {menuScrollableRef, showcaseIframeRef} = useReduxState();
    const rootRef = useRef();
    const active = hasSameMid(showcase, activeShowcase);
    const shouldUpdate = shouldApplyEffect(menuScrollableRef, showcaseIframeRef, rootRef);

    useEffect(() => {
        if (active && shouldUpdate) {
            const menuScrollable: Scrollable = menuScrollableRef.current;
            const iframeTop = rectTop(showcaseIframeRef);
            const root = rootRef.current;
            const to = root.getBoundingClientRect().top + menuScrollable.getScrollTop() - iframeTop;
            !isNaN(to) && menuScrollable.scrollTo(to);
        }
    }, [active, shouldUpdate]);

    return (
        <Root
            ref={rootRef}
            src={showcase.poster}
            active={active}
            onClick={() => {
                if (hasSameMid(showcase, activeShowcase)) { emptyShowcase(); }
                else { updateShowcase(showcase); }
            }}
        />
    );
};
