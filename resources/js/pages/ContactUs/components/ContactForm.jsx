import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Col} from "styled-bootstrap-grid";

const Root = styled(Container)`
    margin-bottom: 10rem;
`;

const Form = styled.form`
    float: left;
    width: 100%;
`;

const InputLabel = styled.label`
    float: right;
    display: table-caption;
    margin: 1rem;
    text-align: left;
    font-size: 1.3rem;
    color: #747474;
`;

const InputField = styled.input`
    font-size: 1.3rem;
    width: 45rem;
    height: 5rem;
    padding: 1.5rem;
    outline: none;
    
    &[type=submit] {
        color: white;
        font-weight: bold;
        height: 4.8rem;
        background-color: rgb(61, 43, 59);
    }
`;

const ContentField = styled.textarea`
    font-size: 1.3rem;
    min-width: 45rem;
    max-width: 45rem;
    min-height: 15rem;
    max-height: 15rem;
    border-color: #d2d2d2;
    padding-left: 1.5rem;
`;

function ContactForm(props: Props) {
    const {
        name = '이름 (required)',
        mail = '메일 (required)',
        subject = '제목',
        content = '내용',
        submit = '보내기',
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
    R.identity
)(ContactForm);
