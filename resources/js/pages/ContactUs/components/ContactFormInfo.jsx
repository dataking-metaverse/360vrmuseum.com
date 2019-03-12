import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

type Props = {
    serviceCenterText: string,
    TelephoneInfoText: string,
    AddressInfoText: string,
    FaxInfoText: string,
    inquireSkillText: string,
    sponsorText: string,
    VReducationText: string,
    partnershipText: string,
};

const Root = styled(Container)`
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
        serviceCenterText = '고객센터',
        TelephoneInfoText = 'Tel: 031-421-3677(평일 09:00~19:00',
        AddressInfoText = '경기도 안양시 동안구 시민대로327 스마트콘텐츠센터 606호',
        FaxInfoText = 'Fax: 031-421-3677 | Mail: help@dataking.co.kr',

        inquireSkillText = '기술 문의',
        sponsorText = '제휴 제안',
        VReducationText = 'VR 교육',
        partnershipText = '파트너 쉽',
        backgroundBoxImage,
    } = props;
    const {skill, sponsor, vreducation, partnership} = backgroundBoxImage;

    return (
        <Root>
            <ContactInfo>
                <ContactInfoHeader>{serviceCenterText}</ContactInfoHeader>
                <ContactInfoChildren>{TelephoneInfoText}</ContactInfoChildren>
                <ContactInfoChildren>{AddressInfoText}</ContactInfoChildren>
                <ContactInfoChildren>{FaxInfoText}</ContactInfoChildren>
            </ContactInfo>
            <Row>
                <Col xl={5} lg={6} md={6}>
                    <ContactInfoWrapper backgroundImage={skill.src}>
                        <ContactInfoOverlay></ContactInfoOverlay>
                        <ContactInfoCard>
                            {inquireSkillText}
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
                            {VReducationText}
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
        backgroundBoxImage: R.path(['assets', 'contactUs', 'backgroundBoxImage'])
    }))
)(ContactFormInfo);
