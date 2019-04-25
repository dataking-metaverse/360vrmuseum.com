import React, {useState, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";

import {pushMessage} from "../../../redux/actionBuilders/global";
import {updateLastCommentSubmittedTime} from "../../../redux/actionBuilders/showcase";
import RecaptchaField from "../../../components/RecaptchaField";
import getFormData from "../../../helpers/getFormData";
import ShowcaseContext from "../ShowcaseContext";
import Button from "../../Button";
import CommentTextArea from "./CommentTextArea";


type Props = {
    text: {
        placeholder: string,
        postComment: string,
    },
    pushMessage: function,
};

const getMid = showcase => showcase ? showcase.getAttribute('mid') : '';


export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
            submitRoute: R.path(['app', 'routes', 'api.comment.post']),
            axios: R.prop('axios'),
        }),
        R.applySpec({pushMessage, updateLastCommentSubmittedTime})
    )
)(function CommentForm(props: Props) {
    const {text, axios, submitRoute, updateLastCommentSubmittedTime} = props;
    const showcase = useContext(ShowcaseContext);
    const [content, setContent] = useState('');

    const onSubmit: (event: Event) => void = R.pipe(
        R.tap(R.invoker(0, 'preventDefault')),
        getFormData,
        R.when(
            R.prop('content'),
            R.pipe(
                R.curryN(2, axios.post)(submitRoute),
                R.then(R.pipe(
                    () => setContent(''),
                    updateLastCommentSubmittedTime
                ))
            )
        )
    );

    const onChange: (event: Event) => void = R.pipe(
        R.path(['target', 'value']),
        R.when(
            R.complement(R.is(String)),
            R.always(''),
        ),
        setContent
    );

    const hasContent = !!content.trim();

    return (
        <form onSubmit={onSubmit}>
            <RecaptchaField />
            <input type="hidden" name="mid" value={getMid(showcase)} />
            <CommentTextArea name="content" placeholder={text.placeholder} onChange={onChange} value={content} />
            <div className="text-right">
                <Button type="secondary" disabled={!hasContent}>{text.postComment}</Button>
            </div>
        </form>
    );
});
