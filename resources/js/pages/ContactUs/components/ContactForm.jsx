import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";

type Props = {
    text: Array<string>,
};

const Root = styled(Container)`
    margin-bottom: 10rem;
`;

const Form = styled.form`
    float: left;
    width: 100%;
`;

const InputLabel = styled.label`
    display: block;
    width: 100%;
    margin: 1rem;
    text-align: left;
    font-size: 1.3rem;
    color: #747474;
`;

const InputField = styled.input`
    font-size: 1.3rem;
    width: 100%;
    height: 5rem;
    padding: 1.5rem;
    outline: none;
    border: 1px solid #dfdfdf;
    
    &[type=submit] {
        color: white;
        font-weight: bold;
        height: 4.8rem;
        background-color: rgb(61, 43, 59);
    }
`;

const ContentField = styled.textarea`
    font-size: 1.3rem;
    width: 100%;
    display: block;
    min-height: 15rem;
    max-height: 15rem;
    border: 1px solid #dfdfdf;
    padding-left: 1.5rem;
`;

function ContactForm(props: Props) {
    const {
        label: [name, mail, subject, content, submit]
    } = props;
    return (
        <Container>
            <Form>
                <InputLabel className="mb-4; mr-5">{name}<br/><InputField/></InputLabel>
                <InputLabel className="mb-4; mr-5">{mail}<br/><InputField/></InputLabel>
                <InputLabel className="mb-4; mr-5">{subject}<br/><InputField/></InputLabel>
                <InputLabel className="mb-4; mr-5">{content}<br/><ContentField/></InputLabel>
                <InputLabel className="mb-4; mr-5"><InputField type="submit" value={submit}/></InputLabel>
            </Form>
        </Container>
    );
}

export default R.compose(
    connect(R.applySpec({
        label: R.path(['lang', 'pages', 'contact-us', 'contactForm', 'label']),
    }))
)(ContactForm);
