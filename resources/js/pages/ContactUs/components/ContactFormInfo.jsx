import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

type Props = {
    info: Array<string>,
    card: Array<string>,
    backgroundImage: Array<string>,
};

const Root = styled.div`
    text-align: left;
    margin-bottom: 10rem;
`;

const ContactInfo = styled.div`
    margin-bottom: 5rem;
`;

const ContactInfoHeader = styled.p`
    color: #3d2b3b;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2rem;
`;

const ContactInfoChildren = styled.p`
    font-size: 1.3rem;
    line-height: 3rem;
`;

const ContactInfoCard = styled.div`
    position: relative;
    border: 1px solid;
    color: white;
    font-weight: bold;
    padding: 5rem 0;
    text-align: center;
    line-height: 1;
    font-size: 2rem;
`;

const ContactInfoOverlay = styled.div`
    position: absolute;
    opacity: .5;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: background .3s,border-radius .3s,opacity .3s;
    background-color: rgba(25,0,22,.73);
`;

const ContactInfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${R.prop('backgroundImage')});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function ContactFormInfo(props: Props) {
    const {
        info: [serviceCenter, TelephoneInfo, AddressInfo, FaxInfo],
        card: [skillText, sponsorText, vreducationText, partnershipText],
        backgroundBoxImage,
    } = props;
    const {skill, sponsor, vreducation, partnership} = backgroundBoxImage;

    return (
        <Root>
            <ContactInfo>
                <ContactInfoHeader>{serviceCenter}</ContactInfoHeader>
                <ContactInfoChildren>{TelephoneInfo}</ContactInfoChildren>
                <ContactInfoChildren>{AddressInfo}</ContactInfoChildren>
                <ContactInfoChildren>{FaxInfo}</ContactInfoChildren>
            </ContactInfo>
            <Row>
                <Col xl={5} lg={6} md={6}>
                    <ContactInfoWrapper backgroundImage={skill.src}>
                        <ContactInfoOverlay></ContactInfoOverlay>
                        <ContactInfoCard>
                            {skillText}
                        </ContactInfoCard>
                    </ContactInfoWrapper>
                </Col>
                <Col xl={5} lg={6} md={6}>
                    <ContactInfoWrapper backgroundImage={sponsor.src}>
                        <ContactInfoOverlay></ContactInfoOverlay>
                        <ContactInfoCard>
                            {sponsorText}
                        </ContactInfoCard>
                    </ContactInfoWrapper>
                </Col>
                <Col xl={5} lg={6} md={6}>
                    <ContactInfoWrapper backgroundImage={vreducation.src}>
                        <ContactInfoOverlay></ContactInfoOverlay>
                        <ContactInfoCard>
                            {vreducationText}
                        </ContactInfoCard>
                    </ContactInfoWrapper>
                </Col>
                <Col xl={5} lg={6} md={6}>
                    <ContactInfoWrapper backgroundImage={partnership.src}>
                        <ContactInfoOverlay></ContactInfoOverlay>
                        <ContactInfoCard>
                            {partnershipText}
                        </ContactInfoCard>
                    </ContactInfoWrapper>
                </Col>
            </Row>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        backgroundBoxImage: R.path(['assets', 'contactUs', 'backgroundBoxImage']),
        info: R.path(['lang', 'pages', 'contact-us', 'contactInfo', 'text', 'info']),
        card: R.path(['lang', 'pages', 'contact-us', 'contactInfo', 'text', 'card']),
    }))
)(ContactFormInfo);
