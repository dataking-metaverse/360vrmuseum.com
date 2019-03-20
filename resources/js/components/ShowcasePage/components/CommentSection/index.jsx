import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import getFormData from "../../../../helpers/getFormData";
import Button from "../../../Button";
import ShowcaseSectionTitle from "../ShowcaseSectionTitle";
import ShowcaseContainer from "../../ShowcaseContainer";
import CommentList from "../../CommentList";
import ShowcaseContext from "../../ShowcaseContext";



type Props = {
    text: {
        title: string,
        placeholder: string,
        postComment: string,
        reply: string,
    },
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

function CommentSection(props: Props) {
    const {axios, text, submitRoute} = props;
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
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            <form onSubmit={onSubmit}>
                <TextArea name="comment" placeholder={text.placeholder} />
                <div className="text-right">
                    <Button type="secondary">{text.postComment}</Button>
                </div>
            </form>
            <br /><br />
            <CommentList />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
            submitRoute: R.path(['app', 'routes', 'api.comment.post']),
            axios: R.prop('axios'),
        }),
        R.always({})
    )
)(CommentSection);
