import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import makeSrcset from "../../../helpers/makeSrcset";

import type {ResponsiveImage} from "../../../types";

type Props = {
    text: Array<String>,
    partnershipImages: Array<String>,
};

type ImageColProps = {
    image: ResponsiveImage,
}

const Root = styled(Container)`
    text-align: center;
    margin-bottom: 25rem;
`;

const PartnershipTitle = styled.p`
    color: #3d2b3b;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 3rem;
    
    
    ${media.lg`
        font-size: 5.2rem;    
    `}
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
`;

function ImageCol(props: ImageColProps) {
    const image: ResponsiveImage = props.image;
    return (
        <Col xl={2} lg={3} md={3} sm={4} xs={6}>
            <Img src={image.src} srcSet={makeSrcset(image.srcSetObject)}/>
        </Col>
    );
}

function ContactPartnerships(props: Props) {
    const {
        text: {title, description, more},
        partnershipImages,
    } = props;
    const {microsoft, sbck, matterport, nationalMuseum, gonjuMuseum, chuncheonMuseum, jejuMuseum, sookmyung, sahmyook, keimyung} = partnershipImages;

    return (
        <Root>
            <div>
                <PartnershipTitle>{title}</PartnershipTitle>
                <PartnershipContent dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <Container>
                <Row>
                    <ImageCol image={microsoft} />
                    <ImageCol image={sbck} />
                    <ImageCol image={matterport} />
                    <ImageCol image={nationalMuseum} />
                    <ImageCol image={gonjuMuseum} />
                    <ImageCol image={chuncheonMuseum} />
                    <ImageCol image={jejuMuseum} />
                    <ImageCol image={sookmyung} />
                    <ImageCol image={sahmyook} />
                    <ImageCol image={keimyung} />
                </Row>
                <PartnershipMore>{more}</PartnershipMore>
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        partnershipImages: R.path(['assets', 'contactUs', 'partnership']),
        text: R.path(['lang', 'pages', 'contact-us', 'partnership', 'text']),
    })),
)(ContactPartnerships);
