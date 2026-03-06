import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import Button from "../Button";

type Props = {
    open: boolean,
    action: () => void,
    title?: string,
    children: any,
};


const confirmZIndex = R.path([ 'theme', 'variables', 'zIndexes', 'confirm' ]);
const white = R.path([ 'theme', 'variables', 'colors', 'basic', 'white' ]);
const darkerPurple = R.path([ 'theme', 'variables', 'colors', 'basic', 'darkerPurple' ]);

const Root = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.1);
    align-items: center;
    justify-content: center;
    z-index: ${confirmZIndex};
    font-size: 2rem;
`;

const BackgroundCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Panel = styled.div`
    position: absolute;
    width: 30rem;
    background-color: ${white}
`;

const PanelHead = styled.div`
    padding: 1.4rem;
    background-color: ${darkerPurple};
    color: ${white};
    
    &:after {
        content: ' ';
    }
`;

const PanelBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.4rem;
    min-height: 15rem;
`;

const Text = styled.div`
    flex-grow: 1;
`;

const Buttons = styled.div`
    
`;

export default R.compose(
    R.identity,
)(function ConfirmActual(props: Props) {
    const {
        open,
        title = 'Confirmation',
        children,
        action,
        onClose,
    } = props;

    const onYesButtonClick = R.pipe(
        R.tap(action),
        R.tap(onClose),
    );

    const onNoButtonClick = onClose;

    if (!open) { return null; }
    return (
        <Root>
            <BackgroundCover onClick={onClose} />
            <Panel>
                <PanelHead>{title}</PanelHead>
                <PanelBody>
                    <Text>
                        {children}
                    </Text>
                    <Buttons>
                        <Button size="small" type="secondary" onClick={onYesButtonClick}>Yes</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button size="small" onClick={onNoButtonClick}>Cancel</Button>
                    </Buttons>
                </PanelBody>
            </Panel>
        </Root>
    );
});
