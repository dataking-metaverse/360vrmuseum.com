import React, {useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";

import getFormData from "../../../../helpers/getFormData";
import ShowcaseContext from "../../ShowcaseContext";
import Button from "../../../Button";
import User from "../../../../models/User";


type Props = {
    user: User,
    text: {
        placeholder: string,
        postComment: string,
    }
};

type InnerProps = {

};

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 10em;
    resize: none;
    padding: .8rem 1.6rem;
    font-size: 1.8rem;
    margin-bottom: 1em;
    font-family: inherit;
`;

const CommentFormInner = R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
            submitRoute: R.path(['app', 'routes', 'api.comment.post']),
            axios: R.prop('axios'),
        }),
        R.always({})
    )
)(function(props: InnerProps) {
    const {text, axios, submitRoute} = props;
    const showcase = useContext(ShowcaseContext);

    async function onSubmit(event: Event) {
        event.preventDefault();
        const data = getFormData(event);
        if (!data.comment) { return false; }
        await axios.post(submitRoute, {
            mid: showcase.getAttribute('mid'),
            content: data.comment,
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <TextArea name="comment" placeholder={text.placeholder} />
            <div className="text-right">
                <Button type="secondary">{text.postComment}</Button>
            </div>
        </form>
    );
});

function CommentForm(props: Props) {

    return <CommentFormInner />
}

export default R.compose(
    connect(
        R.applySpec({
            user: R.prop('user'),
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
        }),
        R.always({}))
)(CommentForm);
