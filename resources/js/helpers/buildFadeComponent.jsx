import React from "react";
import {CSSTransition} from "react-transition-group";
import * as R from "ramda";
import styled from "styled-components";

import type {Node} from "react";


type Props = {
    duration: ?number,
    delay: ?number,
    childrenRef: Ref,
};

const classNameBase = 'faded-component';
const className = {
    appear: `${classNameBase}-appear`,
    appearActive: `${classNameBase}-appear-active`,
    enter: `${classNameBase}-enter`,
    enterActive: `${classNameBase}-enter-active`,
    enterDone: `${classNameBase}-enter-done`,
    exit: `${classNameBase}-exit`,
    exitActive: `${classNameBase}-active-exit`,
    exitDone: `${classNameBase}-exit-done`,
};

function pointInPage(x, y) {
    return (x >= 0 && x < window.innerWidth) && (y >= 0 && y < window.innerHeight);
}

const rootAttr = name => R.pipe(
    R.prop(name),
    R.divide(R.__, 1000)
);

class FadeComponent extends React.Component {

    state = {
        in: true,
    };

    componentDidMount() {
        this.trackWaypoint();
        window.addEventListener('scroll', this.trackWaypoint);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.trackWaypoint);
    }

    trackWaypoint: () => void = () => {
        const node = this.props.childrenRef.current;
        if (!(node instanceof Element)) { return; }

        const {x, y, width, height} = node.getBoundingClientRect();

        if (!this.state.in) {
            if (pointInPage((x + width) >> 1, (y + height) >> 1)) {
                this.setState({ in: true });
            }
        } else {
            if (!pointInPage(x, y) && !pointInPage(x + width, y + height)) {
                this.setState({ in: false });
            }
        }

    };

    render() {
        return (
            <CSSTransition
                in={this.state.in}
                timeout={300}
                classNames={className}
                appear
            >
                {this.props.children}
            </CSSTransition>
        );
    }
}

const buildFadeComponent = component => (...styledProps) => {
    const Component = styled(styled[component](...styledProps))`
    opacity: 0;
    transform: translateY(3rem);
    transition-property: opacity, transform;
    
    &.${className.enterDone} {
        opacity: 1;
        transform: translateY(0);
        transition-duration: ${rootAttr('duration')}s;
        transition-delay: ${rootAttr('delay')}s;
    }
`;

    return class extends React.Component {
        ref = React.createRef();
        render() {
            const ref = React.createRef();
            let {duration, delay, ...restProps} = this.props;
            duration = duration || 400;
            delay = delay || 400;
            return (
                <FadeComponent childrenRef={this.ref}>
                    <Component ref={this.ref} {...restProps} duration={duration} delay={delay} />
                </FadeComponent>
            );
        }
    };
};

export default buildFadeComponent;
