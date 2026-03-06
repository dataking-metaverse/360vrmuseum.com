import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {themeVar} from "../../styling/theme/functions";


type Props = {
    text: {|
        privacyPolicy: string,
        termsOfConditions: string,
        copyright: string,
        allRigthReserved: string,
        noPrinting: string,
    |},
};

const Root = styled.div`
    color: ${themeVar('colors.grayscale.500')};
    background-color: #f4f4f4;
    border-top: 1px solid rgba(61,43,59,.3);
    font-size: 1.2rem;
    line-height: 2.3rem;
    width: 100%;
    padding: 2rem;
    text-align: center;
`;
const CustomLink = styled(Link)`
    color: #a39e9e;
    text-decoration: none;

    &:hover {
        color: #3d2b3b;
    }
`;
const Copyright = styled.span`
    font-weight: bold;
`;
const CopyrightNotice = styled.span`
    font-weight: bold;
    font-size: 1rem;
`;

const AllRightReserved = styled.span`
`;

const RecaptchaPolicy = styled.div`
    max-width: 30rem;
    margin: auto;
    line-height: 1.4;
    margin-bottom: 2rem;
    
    > a {
        font-weight: bold;
        color: inherit;
        
        &:focus, &:visited {
            outline: none;
            color: inherit;
        }
    }
`;

function Footer(props: Props) {
    const {text, routes} = props;
    return (
        <Root>
            <span>
                <CustomLink to={routes['privacy-policy']}>{text.privacyPolicy}</CustomLink>
                {"ㅤ|ㅤ"}
                <CustomLink to={routes['terms-of-service']}>{text.termsOfConditions}</CustomLink>
            </span><br/>
            <Copyright>{text.copyright}</Copyright>
            <br/>
            <AllRightReserved>{text.allRigthReserved}</AllRightReserved>
            <br/>
            <CopyrightNotice>{text.noPrinting}</CopyrightNotice>
            <RecaptchaPolicy>
                This site is protected by reCAPTCHA and the Google&nbsp;
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </RecaptchaPolicy>
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
