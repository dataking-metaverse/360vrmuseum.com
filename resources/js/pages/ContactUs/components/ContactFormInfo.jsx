import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";

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
    border: 1px solid;
    background-color: rgb(61,43,59);
    color: white;
    font-weight: bold;
    padding: 5rem 0;
    text-align: center;
    line-height: 1;
    font-size: 2rem;
`;

function ContactFormInfo(props: Props) {
    const {
        serviceCenterText = '고객센터',
        TelephoneInfoText = 'Tel: 031-421-3677(평일 09:00~19:00',
        AddressInfoText = '경기도 안양시 동안구 시민대로327 스마트콘텐츠센터 606호',
        FaxInfoText = 'Fax: 031-421-3677 | Mail: help@dataking.co.kr',

        inquireSkill = '기술 문의',
        sponsor = '제휴 제안',
        VReducation = 'VR 교육',
        partnership = '파트너 쉽',
    } = props;

    return (
        <Root>
            <ContactInfo>
                <ContactInfoHeader>{serviceCenterText}</ContactInfoHeader>
                <ContactInfoChildren>{TelephoneInfoText}</ContactInfoChildren>
                <ContactInfoChildren>{AddressInfoText}</ContactInfoChildren>
                <ContactInfoChildren>{FaxInfoText}</ContactInfoChildren>
            </ContactInfo>
            <Row>
                <Col col={5}>
                    <ContactInfoCard>{inquireSkill}</ContactInfoCard>
                </Col>
                <Col col={5}>
                    <ContactInfoCard>{sponsor}</ContactInfoCard>
                </Col>
                <Col col={5}>
                    <ContactInfoCard>{VReducation}</ContactInfoCard>
                </Col>
                <Col col={5}>
                    <ContactInfoCard>{partnership}</ContactInfoCard>
                </Col>
            </Row>
        </Root>
    );
}

export default R.compose(
    R.identity
)(ContactFormInfo);
