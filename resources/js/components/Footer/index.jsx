import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {themeVar} from "../../styling/theme/functions";
import {connect} from "react-redux";


type Props = {
    privacyPolicyLink: ?string,
    termsOfConditionsLink: ?string,
};

const Root = styled.div`
    color: ${themeVar('colors.grayscale.500')};
    background-color: #f4f4f4;
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
    const {text, routes} = props;
    return (
        <Root>
            <span>
                <Link href={routes['privacy-policy']}>{text.privacyPolicy}</Link>
                ㅤ|ㅤ
                <Link href={routes['terms-and-conditions']}>{text.termsOfConditions}</Link>
            </span><br/>
            <Copyright>{text.copyright}</Copyright>
            <br/>
            <AllRightReserved>{text.allRigthReserved}</AllRightReserved>
            <br/>
            <CopyrightNotice>{text.noPrinting}</CopyrightNotice>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'footer']),
            routes: R.path(['app', 'routes'])
        }),
        R.always({})
    )
)(Footer);
