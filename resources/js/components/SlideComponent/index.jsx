import React from "react";
import styled from "styled-components";

import type {ComponentType, ElementType} from "react";

type Props = {
    open: boolean,
    component: ComponentType,
    children: ElementType,
};

type State = {
    wrapperHeight: ?number | void,
};

const Root = styled.div`
    transition: height .4s;
`;

const Wrapper = styled.div`

`;



export default class SlideComponent extends React.Component<Props, State> {

    wrapperRef = React.createRef();

    hasUnmounted = false;

    state: State = {
        wrapperHeight: null,
    };

    componentDidMount() {
        this.checkWrapperHeight();
    }

    componentWillUnmount() {
        this.hasUnmounted = true;
    }

    checkWrapperHeight = () => {
        if (this.hasUnmounted) { return; }

        this.setState(prevState => {
            const node: ?Element = this.wrapperRef.current;
            if (!node) { return {}; }
            const newHeight = node.getBoundingClientRect().height;
            return prevState.wrapperHeight !== newHeight ? { wrapperHeight: newHeight } : {};
        });
    };

    getStyle() {
        return {height: this.props.open ? this.state.wrapperHeight : 0};
    }

    render() {
        return (
            <Root style={this.getStyle()}>
                <Wrapper ref={this.wrapperRef}>
                    {this.props.children}
                </Wrapper>
            </Root>
        );
    }
}
