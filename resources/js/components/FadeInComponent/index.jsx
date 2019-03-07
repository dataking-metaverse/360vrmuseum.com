import React from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";
import instanceOf from "../../helpers/instanceOf";

type Props = {
    className: ?string,
    style: ?{},
    duration: ?number,
    delay: ?number,
    children: Node,
};

const className = 'fade-in-component';

const rootAttr = name => R.pipe(
    R.prop(name),
    R.divide(R.__, 1000)
);

const Root = styled.div`

    // the child just right after the starting waypoint
    > [data-start-waypoint] + * {
        opacity: 0;
        transform: translateY(3rem);
        transition-property: opacity, transform;
    }
    
    > .${className}-enter-done {
        transform: translateY(0);
        opacity: 1;
        transition-duration: ${rootAttr('duration')}s;
        transition-delay: ${rootAttr('delay')}s;
    }
`;

const Waypoint = styled.div`
    position: relative;
`;


export default class FadeInComponent extends React.Component<Props> {

    static defaultProps = {
        classNames: '',
        style: {},
        duration: 400,
        delay: 0,
    };

    startWaypointRef = React.createRef();
    endWaypointRef = React.createRef();

    state = {
        in: false,
    };

    static pointInPageVertically(y) {
        return y > 0 && y <= window.innerHeight;
    }

    componentDidMount() {
        this.trackWaypoint();
        window.addEventListener('scroll', this.trackWaypoint);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.trackWaypoint);
    }

    trackWaypoint: () => void = () => {
        const start = this.startWaypointRef.current;
        const end = this.endWaypointRef.current;
        if (!R.all(instanceOf(HTMLElement), [start, end])) { return; }

        const startY = start.getBoundingClientRect().y;
        const endY = end.getBoundingClientRect().y;
        const middleY = (startY + endY) >> 1;

        if (!this.state.in) {
            if (FadeInComponent.pointInPageVertically(middleY)) {
                this.setState({ in: true });
            }
        } else {
            if (!R.any(FadeInComponent.pointInPageVertically, [startY, endY])) {
                this.setState({ in: false });
            }
        }

    };

    render() {
        const rootProps = R.pick(['style', 'className', 'duration', 'delay'])(this.props);
        return (
            <Root {...rootProps}>
                <Waypoint ref={this.startWaypointRef} data-start-waypoint />
                <CSSTransition
                    in={this.state.in}
                    timeout={300}
                    classNames={className}
                    enter={true}
                >
                    {this.props.children}
                </CSSTransition>
                <Waypoint ref={this.endWaypointRef} data-end-waypoint />
            </Root>
        );
    }
}
