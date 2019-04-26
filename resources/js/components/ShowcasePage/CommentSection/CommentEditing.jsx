import React, {useState, useEffect} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";

import RecaptchaField from "../../RecaptchaField";
import CommentTextArea from "./CommentTextArea";
import Button from "../../Button";
import getFormData from "../../../helpers/getFormData";
import {updateLastCommentSubmittedTime} from "../../../redux/actionBuilders/showcase";
import Confirm from "../../Confirm";

type Props = {
    comment: Comment,
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
        }),
        R.applySpec({updateLastCommentSubmittedTime})
    )
)(function CommentEditingContent(props: Props) {
    const {comment, text, submitRoute, onSubmitFinish, axios, updateLastCommentSubmittedTime} = props;
    const commentId = comment.getAttribute('id');
    const originalContent = comment.getAttribute('content');
    const [editContent, setEditContent] = useState('');

    useEffect(() => {
        setEditContent(originalContent);
    }, [originalContent]);

    const onTextAreaChange = R.pipe(
        R.path(['target', 'value']),
        setEditContent
    );

    const onSubmit: (event: Event) => void = R.pipe(
        R.tap(R.invoker(0, 'preventDefault')),
        getFormData,
        R.when(
            R.prop('content'),
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

    return (
        <React.Fragment>
            <br />
            <Form method="PUT" action="" onSubmit={onSubmit}>
                <RecaptchaField />
                <input type="hidden" name="id" value={commentId} />
                <CommentTextArea name="content" onChange={onTextAreaChange} value={editContent} />
                <div className="text-right">
                    <Button type="secondary" disabled={!hasContent || !hasUpdated}>{text.submitEditing}</Button>
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
    }), R.applySpec({updateLastCommentSubmittedTime}))
)(function CommentEditing(props: Props) {
    const {comment, recaptchaVerification, axios, submitUrl, updateLastCommentSubmittedTime} = props;
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
            <ToggleButton onClick={onDeleteButtonClick}>delete</ToggleButton>
            &nbsp;&nbsp;
            <ToggleButton onClick={onEditButtonClick}>edit</ToggleButton>
            <Confirm
                open={deleting}
                action={() => deleteComment(comment.getAttribute('id'))}
                onClose={() => setDeleting(false)}
            >
                Are you sure you want to delete this content?
            </Confirm>
        </ToggleButtonWrap>
    );
});
