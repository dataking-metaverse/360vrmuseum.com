import React, {useRef} from "react";
import * as R from "ramda";
import styled from "styled-components";

import FadeComponent from "../components/FadeComponent";

import type {ComponentType, Element} from "react";

type Props = {
    duration?: number,
    delay?: number,
};

const rootAttr = name => R.pipe(
    R.prop(name),
    R.divide(R.__, 1000)
);

const duration = R.prop('duration');
const delay = R.prop('delay');

const faded = (component: ComponentType<any>) => (...styledProps) => {
    const Component = styled(styled[component](...styledProps))`
    opacity: 0;
    transform: translateY(3rem);
    transition-property: opacity, transform;
    
    &.${FadeComponent.className.enterDone} {
        opacity: 1;
        transform: translateY(0);
        transition-duration: ${rootAttr('duration')}s;
        transition-delay: ${rootAttr('delay')}s;
    }
`;

    return function FadedComponent(props: Props): Element {
        const ref = useRef();
        return (
            <FadeComponent.Context.Consumer>
                {value => (
                    <FadeComponent childrenRef={ref}>
                        <Component
                            ref={ref}
                            {...props}
                            duration={props.duration || duration(value) || 400}
                            delay={props.delay || delay(value) || 400}
                        />
                    </FadeComponent>
                )}
            </FadeComponent.Context.Consumer>
        );
    };
};

export default faded;
