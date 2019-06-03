import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import FadeComponent from "../components/FadeComponent";

import type {ComponentType} from "react";

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

    return class extends React.Component {
        ref = React.createRef();
        render() {
            return (
                <FadeComponent.Context.Consumer>
                    {value => (
                        <FadeComponent childrenRef={this.ref}>
                            <Component
                                ref={this.ref}
                                {...this.props}
                                duration={this.props.duration || duration(value) || 400}
                                delay={this.props.delay || delay(value) || 400}
                            />
                        </FadeComponent>
                    )}
                </FadeComponent.Context.Consumer>
            );
        }
    };
};

export default faded;
