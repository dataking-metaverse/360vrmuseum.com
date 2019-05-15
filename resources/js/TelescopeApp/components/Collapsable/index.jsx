import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Transition} from "react-transition-group";

import type {Ref, Node} from "react";

type Props = {
    children: Node,
    open: boolean,
};

const transitionDuration: number = 400;

const Root = styled.div`
    overflow: hidden;
    height: ${R.prop('height')};
    transition: height ${transitionDuration}ms;
`;

const Inner = styled.div`
    
`;

function refRect(ref: Ref): ?DomRect {
    return ref.current instanceof Element ? ref.current.getBoundingClientRect() : null;
}

const refHeight: (ref: Ref) => ?number = R.pipe(
    refRect,
    R.prop('height'),
    R.when(R.isNil, R.always(null))
);

export default function Collapsable(props: Props) {
    const {children, open} = props;
    const [delayedOpen, setDelayedOpen] = useState(open);
    const [height, setHeight] = useState(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const newHeight = refHeight(innerRef);
        if (newHeight !== height) { setHeight(newHeight); }
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => setDelayedOpen(open), 100);
        return () => clearTimeout(timeoutId);
    }, [open]);

    return (
        <Transition in={delayedOpen} timeout={transitionDuration}>
            {state => (
                <Root height={R.cond([
                    [R.always(R.and(!open, delayedOpen)), R.always(`${height}px`)],
                    [R.always(R.and(!open, !delayedOpen)), R.always('0')],
                    [R.equals('entering'), R.always(`${height}px`)],
                    [R.equals('entered'), R.always('auto')],
                    [R.equals('exiting'), R.always('0')],
                    [R.equals('exited'), R.always('0')],
                    [R.T, R.always('auto')],
                ])(state)}>
                    <Inner ref={innerRef}>
                        {children}
                    </Inner>
                </Root>
            )}
        </Transition>
    );
}
