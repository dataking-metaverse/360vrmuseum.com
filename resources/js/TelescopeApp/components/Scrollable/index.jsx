import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {sinusoidal as ease} from "easing/src/functions";

import type {Ref, Node} from "react";

type Props = {|
    children: Node,
|};

const height = R.pipe(
    R.path(['theme', 'scrollable', 'height']),
    R.when(
        R.complement(Boolean),
        R.always('auto')
    )
);
const Root = styled.div`
    position: relative;
    height: ${height}rem;
    overflow: auto;
`;

/**
 * @sideeffects
 */
function jumpElementTo(element: Element, scrollTop: number): void {
    element.scrollTop = scrollTop;
}

/**
 * @sideeffects
 */
function jumpElementToTop(element: Element): void {
    jumpElementTo(element, 0);
}

/**
 * @sideeffects
 */
function scrollElementTo(element: Element, scrollTop: number): void {
    const startTop = element.scrollTop;
    const diff = scrollTop - startTop;
    const start = (+(new Date()));
    const duration = 400;

    const tick = () => {
        const now = (+(new Date));
        if (now >= start + duration) { jumpElementTo(element, scrollTop); return; }
        requestAnimationFrame(tick);
        const current = (now - start) / duration;
        const currentDiff = ease(current) * diff;
        element.scrollTop = startTop + currentDiff;
    };

    tick();

}

export default class Scrollable extends React.Component<Props> {

    rootRef: Ref<Element> = React.createRef();

    getElement: () => Element = R.pipe(
        R.always(this),
        R.path(['rootRef', 'current'])
    );

    getScrollTop: () => ?number = R.pipe(
        R.always(this),
        R.invoker(0, 'getElement'),
        R.ifElse(
            R.is(Element),
            R.prop('scrollTop'),
            R.always(null),
        )
    );

    scrollTo = (to: number) => {
        scrollElementTo(this.getElement(), to);
    };

    jumpToTop: () => void = R.pipe(
        R.always(this),
        R.invoker(0, 'getElement'),
        R.when(
            R.is(Element),
            jumpElementToTop
        ),
        R.always(undefined)
    );

    render() {
        return (
            <Root ref={this.rootRef}>
                {this.props.children}
            </Root>
        );
    }
};
