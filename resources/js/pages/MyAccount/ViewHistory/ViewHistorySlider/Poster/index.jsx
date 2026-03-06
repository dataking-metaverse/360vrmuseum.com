import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import Showcase from "~/models/Showcase";

type Props = {|
    showcase: Showcase,
|};

const propNotNil = R.propSatisfies(R.complement(R.isNil));

const getPoster = R.cond([
    [propNotNil('poster'), R.prop('poster')],
    [propNotNil('thumbnail'), R.prop('thumbnail')],
    [R.T, R.always(null)],
]);
const getTitle = R.prop('main_title');
const getSubtitle = R.prop('presented_by');

const TitleBase = styled.div`
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color .4s;
`;

const Root = styled.a`
    position: relative;
    display: block;
    background-image: url(${R.prop('background')});
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    
    &:hover ${TitleBase} {
        color: rgba(255,255,255,0);
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 150%;
        width: 100%;
        background-image: linear-gradient(to bottom,rgba(68,68,68,0),#444444);
        opacity: 1;
        transition: top .4s, opacity .4s;
    }

    &:hover:before {
        opacity: 0;
    }

    &:after {
        content: '';
        position: relative;
        display: block;
        padding-top: 150%;
    }

`;

const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.45rem 1.2rem;
`;

const Title = styled(TitleBase)`
    font-size: 1.4rem;
`;

const Subtitle = styled(TitleBase)`
    font-size: 1.2rem;
`;

const ShadowCoverInner = styled.div`
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0);
`;

const ShadowCover = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(27, 27, 27, 0);
    transition: background-color .4s;
    z-index: 1;

    &:hover {
        background-color: rgba(27, 27, 27, .6);
    }
    
    &:hover ${ShadowCoverInner} {
        color: rgba(255, 255, 255, 1);
    }
`;

export default function Poster(props: Props) {
    const {showcase} = props;
    const showcaseProp = showcase.props;
    const background = getPoster(showcaseProp);
    const title = getTitle(showcaseProp);
    const subtitle = getSubtitle(showcaseProp);
    return (
        <Root
            background={background}
            href={showcase.route()}
        >
            <Text>
                <Title>{title}</Title>
                <Subtitle>by {subtitle}</Subtitle>
            </Text>
            <ShadowCover>
                <ShadowCoverInner>
                    바로보기
                </ShadowCoverInner>
            </ShadowCover>
        </Root>
    );
}
