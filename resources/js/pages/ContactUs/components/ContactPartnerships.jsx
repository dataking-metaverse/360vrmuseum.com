import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";

const Root = styled(Container)`
    text-align: center;
`;

const PartnershipTitle = styled.p`
    color: #3d2b3b;
    font-size: 5.2rem;
    font-weight: bold;
    margin: 0 0 3rem;
`;

const PartnershipContent = styled.p`
    color: #7a7a7a;
    font-size: 1.8rem;
    font-weight: 100;
    margin-bottom: 8rem;
`;

function ContactPartnerships(props: Props) {
    const {
        partnership = 'Partnership',
        partnershipInfo = '많은 공공 기관들이 360°VR Museum을 구축하여 온라인 전시를 제공하고 있습니다.<br>체험형 VR 박물관을 통해 전 세계 모든 사람들과 전시를 공유하고 감상하는 시간을 가져보세요.'
    } = props;
    return (
        <Root>
            <div>
                <PartnershipTitle>{partnership}</PartnershipTitle>
                <PartnershipContent dangerouslySetInnerHTML={ {__html: partnershipInfo} }/>
            </div>
            <Row>
                <Col col={2}>1</Col>
                <Col col={2}>2</Col>
                <Col col={2}>3</Col>
                <Col col={2}>4</Col>
                <Col col={2}>5</Col>
                <Col col={2}>6</Col>
            </Row>
            <Row>
                <Col col={3}>7</Col>
                <Col col={3}>8</Col>
                <Col col={3}>9</Col>
                <Col col={3}>10</Col>
            </Row>
        </Root>
    );
}

export default R.compose(
    R.identity
)(ContactPartnerships);
