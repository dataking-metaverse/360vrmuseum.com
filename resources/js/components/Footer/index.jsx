import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {themeVar} from "../../styling/theme/functions";


type Props = {
    privacyPolicyLink: ?string,
    termsOfConditionsLink: ?string,
};

const Root = styled.div`
    color: ${themeVar('colors.grayscale.500')};
    background-color: #ededed;
    border-top: 1px solid rgba(61,43,59,.3);
    font-size: 1.2rem;
    line-height: 2.3rem;
    width: 100%;
    height: 13rem;
    padding: 2rem;
    text-align: center;
`;
const Link = styled.a`
    color: #a39e9e;
    text-decoration: none;
    &:hover {
        color: #3d2b3b;
    }
`;
const Copyright = styled.span`
    color: #bcb7b7;
    font-weight: bold;
`;
const CopyrightNotice = styled.span`
    color: #bcb7b7;
    font-weight: bold;
    font-size: 1rem;
`;

const AllRightReserved = styled.span`
    color: bcb7b7;
`;

function Footer(props: Props) {
    const {
        privacyPolicyLink = 'https://360vrmuseum.com/?page_id=1267',
        termsOfConditionsLink = 'https://360vrmuseum.com/?page_id=1267',
        copyright = 'Copyright ©dataking.Inc 2015 - 2019',
        allRigthReserved = 'All rights reserved.',
        noPrinting = '무단전재 및 재배포금지',
    } = props;
    return (
        <Root>
            <span>
                <Link href={privacyPolicyLink}>개인정보 이용약관</Link>
                ㅤ|ㅤ
                <Link href={termsOfConditionsLink}>서비스 이용약관</Link>
            </span><br/>
            <Copyright>{copyright}</Copyright>
            <br/>
            <AllRightReserved>{allRigthReserved}</AllRightReserved>
            <br/>
            <CopyrightNotice>{noPrinting}</CopyrightNotice>
        </Root>
    );
}

export default R.compose(
    R.identity
)(Footer);
