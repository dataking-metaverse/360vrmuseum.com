import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import ContactWelcome from "./components/ContactWelcome";
import ContactForm from "./components/ContactForm";
import ContactFormInfo from "./components/ContactFormInfo";
import ContactPartnerships from "./components/ContactPartnerships";

const ContactFormContainer = styled(Container)`
    margin-bottom: 25rem;
`;

export default class ContactUs extends React.Component {
    render(Root, props: Props) {
        // const user = styled.p`
        //     font-size: 5.1rem;
        // `;

        // const {
        //     welcome = '360°VR Museum 고객지원에',
        //     welcomeMuseum = '오신 것을 환영합니다',
        // } = props;


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
