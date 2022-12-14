import React, {useState, useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {pushMessage} from "../../../redux/actionCreators/global";
import {updateLastCommentSubmittedTime} from "../../../redux/actionCreators/showcase";
import RecaptchaField from "../../../components/RecaptchaField";
import getFormData from "../../../helpers/getFormData";
import countWords from "../../../helpers/countWords";
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
            wordLimit: R.path(['config', 'pages', 'showcase', 'comments', 'wordLimit']),
        }),
        R.applySpec({pushMessage, updateLastCommentSubmittedTime})
    )
)(function CommentForm(props: Props) {
    const {text, axios, submitRoute, updateLastCommentSubmittedTime, wordLimit} = props;
    const showcase = useContext(ShowcaseContext);
    const [content, setContent] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const wordCountStr: string = String(wordCount);

    const onSubmit: (event: Event) => void = R.pipe<Event, void>(
        R.tap(R.invoker(0, 'preventDefault')),
        getFormData,
        R.when(
            R.allPass([
                R.prop('content'),
                R.pipe(R.prop('content'), countWords, R.gte(wordLimit)),
            ]),
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
            R.always<string>(''),
        ),
        R.tap(setContent),
        R.tap(R.pipe(countWords, setWordCount)),
    );

    const hasContent = !!content.trim();
    const buttonDisabled = !hasContent || wordCount > wordLimit;

    return (
        <form onSubmit={onSubmit}>
            <RecaptchaField />
            <input type="hidden" name="mid" value={getMid(showcase)} />
            <WordLimit invalid={wordCount > 100}>{`${wordCountStr} / ${wordLimit}`}</WordLimit>
            <CommentTextArea name="content" placeholder={text.placeholder} onChange={onChange} value={content} />
            <div className="text-right">
                <Button type="secondary" disabled={buttonDisabled}>{text.postComment}</Button>
            </div>
        </form>
    );
});
