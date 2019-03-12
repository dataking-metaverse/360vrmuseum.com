import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import makeSrcset from "../../../helpers/makeSrcset";
import {connect} from "react-redux";


type Props = {
    partnership: string,
    partnershipInfo: string,
};

const Root = styled(Container)`
    text-align: center;
    margin-bottom: 25rem;
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

const Img = styled.img`
    width: 100%;
`;

const PartnershipMore = styled.p`
    font-size: 2rem;
    text-align: right;
    color: rgba(122,56,113,.65);
`

function ContactPartnerships(props: Props) {
    const {
        partnership = 'Partnership',
        partnershipInfo = '많은 공공 기관들이 360°VR Museum을 구축하여 온라인 전시를 제공하고 있습니다.<br>체험형 VR 박물관을 통해 전 세계 모든 사람들과 전시를 공유하고 감상하는 시간을 가져보세요.',
        partnershipImages,
    } = props;
    // const {partnership, partnershipInfo} = props;
    const {microsoft, sbck, matterport, nationalMuseum, gonjuMuseum, chuncheonMuseum, jejuMuseum, sookmyung, sahmyook, keimyung} = partnershipImages;

    return (
        <Root>
            <div>
                <PartnershipTitle>{partnership}</PartnershipTitle>
                <PartnershipContent dangerouslySetInnerHTML={{__html: partnershipInfo}}/>
            </div>
            <Container>
                <Row>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={microsoft.src} srcSet={makeSrcset(microsoft.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={sbck.src} srcSet={makeSrcset(sbck.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={matterport.src} srcSet={makeSrcset(matterport.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={nationalMuseum.src} srcSet={makeSrcset(nationalMuseum.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={gonjuMuseum.src} srcSet={makeSrcset(gonjuMuseum.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={chuncheonMuseum.src} srcSet={makeSrcset(chuncheonMuseum.srcSetObject)}/>
                    </Col>


                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={jejuMuseum.src} srcSet={makeSrcset(jejuMuseum.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={sookmyung.src} srcSet={makeSrcset(sookmyung.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={sahmyook.src} srcSet={makeSrcset(sahmyook.srcSetObject)}/>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} xs={6}>
                        <Img src={keimyung.src} srcSet={makeSrcset(keimyung.srcSetObject)}/>
                    </Col>
                </Row>
                <PartnershipMore>+ 76 more</PartnershipMore>
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        partnershipImages: R.path(['assets', 'contactUs', 'partnership'])
    }))
)(ContactPartnerships);
