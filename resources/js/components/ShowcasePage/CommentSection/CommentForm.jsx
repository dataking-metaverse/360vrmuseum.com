import React, {useState, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";

import {pushMessage} from "../../../redux/actionBuilders/global";
import {updateLastCommentSubmittedTime} from "../../../redux/actionBuilders/showcase";
import RecaptchaField from "../../../components/RecaptchaField";
import getFormData from "../../../helpers/getFormData";
import countWords from "../../../helpers/countWords";
import countChars from "../../../helpers/countChars";
import ShowcaseContext from "../ShowcaseContext";
import Button from "../../Button";
import CommentTextArea from "./CommentTextArea";
import WordLimit from "./WordLimit";


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
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

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
        R.tap(setContent),
        R.tap(R.pipe(countWords, setWordCount)),
        R.tap(R.pipe(countChars, setCharCount)),
    );

    const hasContent = !!content.trim();

    return (
        <form onSubmit={onSubmit}>
            <RecaptchaField />
            <input type="hidden" name="mid" value={getMid(showcase)} />
            <WordLimit invalid={wordCount > 100}>{'{wordCount} / {wordLimit}'.replace('{wordCount}', wordCount).replace('{wordLimit}', 100)}</WordLimit>
            <CommentTextArea name="content" placeholder={text.placeholder} onChange={onChange} value={content} />
            <div className="text-right">
                <Button type="secondary" disabled={!hasContent}>{text.postComment}</Button>
            </div>
        </form>
    );
});
