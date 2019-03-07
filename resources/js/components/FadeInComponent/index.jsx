import React from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";
import instanceOf from "../../helpers/instanceOf";

type Props = {
    className: ?string,
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
        
    > [class^="${className}"], > [class*=" ${className}"] {
        opacity: 0;
        transform: translateY(3rem);
        transition-property: opacity, transform;
        transition-duration: ${rootAttr('duration')}s;
        transition-delay: ${rootAttr('delay')}s;
    }
    
    > .${className}-enter-done {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Waypoint = styled.div`
    position: absolute;
`;


export default class FadeInComponent extends React.Component<Props> {

    static defaultProps = {
        classNames: '',
        duration: 400,
        delay: 0,
    };

    startWaypointRef = React.createRef();
    endWaypointRef = React.createRef();

    state = {
        in: false,
    };

    setIn(value) {
        this.setState({ in: value });
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
        const middle = (start.getBoundingClientRect().y + end.getBoundingClientRect().y) >> 1;
        this.setIn(middle > 0 && middle <= window.innerHeight);
    };

    render() {
        const rootProps = R.pick(['className', 'duration', 'delay'])(this.props);
        return (
            <Root {...rootProps}>
                <Waypoint ref={this.startWaypointRef} data-start-waypoint />
                <CSSTransition
                    in={this.state.in}
                    timeout={300}
                    unmountOnExit
                    classNames={className}
                >
                    {this.props.children}
                </CSSTransition>
                <Waypoint ref={this.endWaypointRef} data-end-waypoint />
            </Root>
        );
    }
}
