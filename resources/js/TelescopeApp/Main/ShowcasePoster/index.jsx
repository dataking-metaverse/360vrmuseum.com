import React, {useEffect, useRef} from "react";
import * as R from "ramda";

import Scrollable from "../../components/Scrollable";
import {
    Root,
    Poster,
} from "./styled";
import ary from "../../functions/ary";
import useShowcase from "../../hooks/useShowcase";
import useReduxAction from "../../hooks/useReduxAction";
import useReduxState from "../../hooks/useReduxState";
import {updateShowcase as updateShowcaseAction, emptyShowcase as emptyShowcaseAction} from "../../redux/actionCreators";

import type {Showcase} from "../../types";
import type {Ref, ElementRef, StatelessComponent} from "react";
type Props = {|
    showcase: ?Showcase,
|};

type DivRef = Ref<ElementRef<'div'>>;
type IframeRef = Ref<ElementRef<'iframe'>>;

function hasSameMid(a: ?Showcase, b: ?Showcase): boolean {
    return Boolean(a && b && typeof a.mid !== 'undefined' && a.mid === b.mid);
}

const shouldApplyEffect = (menuScrollableRef: DivRef, showcaseIframeRef: IframeRef, rootRef: DivRef) => (
    menuScrollableRef && menuScrollableRef.current instanceof Scrollable &&
    showcaseIframeRef && showcaseIframeRef.current instanceof Element &&
    rootRef && rootRef.current instanceof Element
);

const rectTop: (element: ?Element) => number = R.ifElse<any, number, number>(
    ary<ElementRef<'iframe'>, boolean>(R.propIs(Element, 'current')),
    R.pipe(
        R.prop('current'),
        R.invoker(0, 'getBoundingClientRect'),
        R.prop('top')
    ),
    R.always(0)
);


const ShowcasePoster: StatelessComponent<Props> = props => {
    const {showcase} = props;
    const activeShowcase = useShowcase();
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const emptyShowcase = useReduxAction(emptyShowcaseAction);
    const {menuScrollableRef, showcaseIframeRef} = useReduxState();
    const rootRef = useRef<?HTMLDivElement>(null);
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
        <Root>
            <Poster
                ref={rootRef}
                src={showcase.poster}
                active={active}
                onClick={() => {
                    if (hasSameMid(showcase, activeShowcase)) { emptyShowcase(); }
                    else { updateShowcase(showcase); }
                }}
            />
        </Root>
    );
};

export default ShowcasePoster;
