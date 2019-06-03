import React, {useState, useEffect} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";

import getFormData from "~/helpers/getFormData";
import countWords from "~/helpers/countWords";
import {updateLastCommentSubmittedTime} from "~/redux/actionCreators/showcase";
import Comment from "~/models/Comment";
import RecaptchaField from "../../RecaptchaField";
import CommentTextArea from "./CommentTextArea";
import Button from "../../Button";
import Confirm from "../../Confirm";

import type {Axios} from "axios";
import WordLimit from "./WordLimit";

type CommentEditingContentProps = {
    comment: Comment,
    text: {
        submitEditing: string,
    },
    submitRoute: string,
    onSubmitFinish: Function,
    axios: Axios,
    updateLastCommentSubmittedTime: Function,
    wordLimit: number,
};

type Props = {
    comment: Comment,
    recaptchaVerification: string,
    axios: Axios,
    submitUrl: string,
    updateLastCommentSubmittedTime: Function,
    text: {
        edit: string,
        delete: string,
        confirmDeleting: string,
    },
    wordLimit: number,
};

const darkPurple = R.path(['theme', 'variables', 'colors', 'basic', 'darkPurple']);

const ToggleButtonWrap = styled.div`
    text-align: right;
`;

const ToggleButton = styled.span`
    cursor: pointer;
    text-decoration: underline;
    color: ${darkPurple};
`;

const Form = styled.form`
    position: relative;
`;

const CommentEditingContent = R.compose(
    connect(
        R.applySpec({
            axios: R.prop('axios'),
            submitRoute: R.path(['app', 'routes', 'api.comment.post']),
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
            wordLimit: R.path(['config', 'pages', 'showcase', 'comments', 'wordLimit']),
        }),
        R.applySpec({updateLastCommentSubmittedTime})
    )
)(function CommentEditingContent(props: CommentEditingContentProps) {
    const {comment, text, submitRoute, onSubmitFinish, axios, updateLastCommentSubmittedTime, wordLimit} = props;
    const commentId = comment.getAttribute('id');
    const originalContent = comment.getAttribute('content');
    const [editContent, setEditContent] = useState('');
    const [wordCount, setWordCount] = useState<number>(0);
    const wordCountStr: string = String(wordCount);

    useEffect(() => {
        setEditContent(originalContent);
    }, [originalContent]);

    const onTextAreaChange = R.pipe(
        R.path(['target', 'value']),
        R.tap(setEditContent),
        R.tap(R.pipe(countWords, setWordCount)),
    );

    const onSubmit: (event: Event) => void = R.pipe(
        R.tap(R.invoker(0, 'preventDefault')),
        getFormData,
        R.when(
            R.allPass([
                R.prop('content'),
                R.pipe(R.prop('content'), countWords, R.gte(wordLimit)),
            ]),
            R.pipe(
                R.curryN(2, axios.put)(submitRoute),
                R.then(R.pipe(
                    onSubmitFinish,
                    updateLastCommentSubmittedTime
                ))
            )
        )
    );

    const hasContent = Boolean(editContent);
    const hasUpdated = R.complement(R.equals)(editContent, originalContent);
    const buttonDisabled = !hasContent || !hasUpdated || (wordCount > wordLimit);

    return (
        <React.Fragment>
            <br />
            <Form method="PUT" action="" onSubmit={onSubmit}>
                <RecaptchaField />
                <input type="hidden" name="id" value={commentId} />
                <WordLimit invalid={wordCount > 100}>{'{wordCount} / {wordLimit}'.replace('{wordCount}', wordCountStr).replace('{wordLimit}', wordLimit)}</WordLimit>
                <CommentTextArea name="content" onChange={onTextAreaChange} value={editContent} />
                <div className="text-right">
                    <Button type="secondary" disabled={buttonDisabled}>{text.submitEditing}</Button>
                </div>
            </Form>
        </React.Fragment>
    );
});


export default R.compose(
    connect(R.applySpec({
        recaptchaVerification: R.prop('recaptchaVerification'),
        axios: R.prop('axios'),
        submitUrl: R.path(['app', 'routes', 'api.comment.post']),
        text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
        wordLimit: R.path(['config', 'pages', 'showcase', 'comments', 'wordLimit']),
    }), R.applySpec({updateLastCommentSubmittedTime}))
)(function CommentEditing(props: Props) {
    const {text, comment, recaptchaVerification, axios, submitUrl, updateLastCommentSubmittedTime, wordLimit} = props;
    const [open, setOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const content = open && <CommentEditingContent comment={comment} onSubmitFinish={() => setOpen(false)} />;
    const onDeleteButtonClick = () => setDeleting(true);
    const onEditButtonClick = () => setOpen(!open);

    const deleteComment = R.pipe(
        R.assoc('id', R.__, { recaptcha_token: recaptchaVerification }),
        R.assoc('data', R.__, {}),
        R.curryN(2, axios.delete)(submitUrl),
        R.then(updateLastCommentSubmittedTime)
    );

    return open ? content : (
        <ToggleButtonWrap>
            <ToggleButton onClick={onDeleteButtonClick}>{text.delete}</ToggleButton>
            &nbsp;&nbsp;
            <ToggleButton onClick={onEditButtonClick}>{text.edit}</ToggleButton>
            <Confirm
                open={deleting}
                action={() => deleteComment(comment.getAttribute('id'))}
                onClose={() => setDeleting(false)}
            >
                {text.confirmDeleting}
            </Confirm>
        </ToggleButtonWrap>
    );
});
