import React, {useState} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, Col} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import getFormData from "../../../helpers/getFormData";
import LoadingSpinner from "../../../components/LoadingSpinner";
import {themeVar} from "../../../styling/theme/functions";

type Props = {
    text: {
        name: string,
        mail: string,
        subject: string,
        content: string,
        submit: string,
    },
};

type ErrorsProps = {
    errors: {
        [string]: Array<string>,
    },
};

type TextInputProps = {
    name: string,
    title: string,
};

const Root = styled(Container)`
    margin-bottom: 10rem;
`;

const Form = styled.form`
    position: relative;
    width: 100%;
`;

const InputLabel = styled.label`
    display: block;
    width: 100%;
    padding: 1rem;
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
        cursor: pointer;
        font-weight: bold;
        height: 4.8rem;
        background-color: rgb(61, 43, 59);
    }
`;

const TextArea = styled.textarea`
    font-size: 1.3rem;
    width: 100%;
    height: 10em;
    padding: 1.5rem;
    outline: none;
    border: 1px solid #dfdfdf;
    resize: none;
    font-family: inherit;
`;

const ContactFormSpinner = styled(LoadingSpinner)`
    opacity: .5;
`;

const ErrorItem = styled.div`
    padding: 0 1rem;
    color: ${themeVar('colors.basic.secondary')}
`;

function TextInput(props: TextInputProps) {
    return (
        <InputLabel className="mr-5">
            {props.title}
            <br/>
            <InputField name={props.name} />
        </InputLabel>
    ) ;
}

function Errors(props: ErrorsProps) {
    return R.ifElse(
        R.complement(R.isNil),
        R.pipe(
            R.map(R.map(item => (
                <ErrorItem key={item}>{item}</ErrorItem>
            ))),
            R.values,
        ),
        R.always(null),
    )(props.errors);
}

function ContactForm(props: Props) {
    const {text, submitRoute, axios} = props;
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState({});

    async function onSubmit(event) {
        event.preventDefault();
        setSending(true);
        const data = getFormData(event);

        try {
            const response = await axios.post(submitRoute, data);
            event.target.reset();
        } catch (error) {
            setErrors(R.path(['data', 'data'])(error.response));
        }

        setSending(false);
    }

    return (
        <React.Fragment>
            <Form onSubmit={onSubmit}>
                {sending && <ContactFormSpinner cover />}
                <TextInput title={text.name} name="name" />
                <TextInput title={text.mail} name="email" />
                <TextInput title={text.subject} name="subject" />
                {/*<TextArea title={text.content} name="content" />*/}

                <InputLabel className="mr-5">
                    {text.content}
                    <br/>
                    <TextArea name="content" />
                </InputLabel>
                <Errors errors={errors} />
                <InputLabel className="mb-4 mr-5"><InputField type="submit" value={text.submit}/></InputLabel>
            </Form>
        </React.Fragment>
    );
}

export default R.compose(
    connect(R.applySpec({
        submitRoute: R.path(['app', 'routes', 'api.contact.send']),
        text: R.path(['lang', 'pages', 'contact-us', 'contactForm', 'text']),
        axios: R.prop('axios'),
    }))
)(ContactForm);
