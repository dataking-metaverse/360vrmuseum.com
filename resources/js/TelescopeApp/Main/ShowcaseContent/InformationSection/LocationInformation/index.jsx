import React, {useMemo} from "react";
import styled from "styled-components";

import HR from "~/TelescopeApp/components/HR";
import SectionTitle from "~/TelescopeApp/components/SectionTitle";


type Props = {
    address: ?string,
};

const Iframe = styled.iframe`
    width: 769px;
    height: 431px;
    padding: 0;
    border: none;
    margin: 0;
    margin-bottom: 10.4rem;
`;

function iframeUrl(address: string): string {
    return `https://maps.google.com/maps?&q=${address}t=m&z=16&output=embed&iwloc=near`;
}

export default function LocationInformation(props: Props) {
    const {address} = props;
    if (!address) { return null; }
    const url = useMemo(() => iframeUrl(address), [address]);
    return (
        <React.Fragment>
            <SectionTitle>위치</SectionTitle>
            <Iframe
                src={url}
                aria-label={address}
            />
            <HR.LightGrey />
            <br />
        </React.Fragment>
    );
};
