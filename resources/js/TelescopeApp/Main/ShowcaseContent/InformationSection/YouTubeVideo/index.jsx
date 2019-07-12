import React, {useMemo} from "react";
import styled from "styled-components";

import SectionTitle from "~/TelescopeApp/components/SectionTitle";


type Props = {
    id: ?string,
};

const Iframe = styled.iframe`
    width: 769px;
    height: 431px;
    padding: 0;
    margin: 0;
    border: none;
    margin-bottom: 10.4rem;
`;

function iframeUrl(id: string): string {
    return `https://www.youtube.com/embed/${id}`;
}

export default function YouTubeVideo(props: Props) {
    const {id} = props;
    if (!id) { return null; }
    const url = useMemo(() => iframeUrl(id), [id]);
    return (
        <React.Fragment>
            <SectionTitle>영상</SectionTitle>
            <Iframe src={url} />
        </React.Fragment>
    );
};
