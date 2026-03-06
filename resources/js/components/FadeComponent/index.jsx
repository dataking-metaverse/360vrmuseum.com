import React from "react";
import {CSSTransition} from "react-transition-group";


import type {Ref} from "react";

type Props = {
    childrenRef: Ref,
    duration: number,
    delay: number,
};

type State = {
    in: boolean,
};

const classNameBase = 'faded-component';


export default class FadeComponent extends React.Component<Props, State> {

    static className = {
        appear: `${classNameBase}-appear`,
        appearActive: `${classNameBase}-appear-active`,
        enter: `${classNameBase}-enter`,
        enterActive: `${classNameBase}-enter-active`,
        enterDone: `${classNameBase}-enter-done`,
        exit: `${classNameBase}-exit`,
        exitActive: `${classNameBase}-active-exit`,
        exitDone: `${classNameBase}-exit-done`,
    };

    static Context = React.createContext();

    state = {
        in: false,
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
        const {y} = node.getBoundingClientRect();
        if (!this.state.in) {
            if (y < window.innerHeight) {
                this.setState({ in: true });
            }
        }

    };

    render() {
        return (
            <CSSTransition
                in={this.state.in}
                timeout={300}
                classNames={FadeComponent.className}
                appear
            >
                {this.props.children}
            </CSSTransition>
        );
    }
}