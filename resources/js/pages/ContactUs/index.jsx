import React from "react";
import styled from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import ContactWelcome from "./components/ContactWelcome";
import ContactForm from "./components/ContactForm";
import ContactFormInfo from "./components/ContactFormInfo";
import ContactPartnerships from "./components/ContactPartnerships";
import page from "../../decorators/page";

const ContactFormContainer = styled(Container)`
    
    ${media.lg`
        margin-bottom: 10rem;
    `}
`;


@page("contact-us")
export default class ContactUs extends React.Component {
    render(Root, props: Props) {
        return (
            <React.Fragment>
                <ContactWelcome />
                <ContactFormContainer>
                    <Row className="justify-content-center flex-column-reverse flex-lg-row">
                        <Col xl={5} lg={5}>
                            <ContactForm />
                        </Col>
                        <Col xl={6} lg={5}>
                            <ContactFormInfo />
                        </Col>
                    </Row>
                </ContactFormContainer>
                <ContactPartnerships />
            </React.Fragment>
        );
    }
}
