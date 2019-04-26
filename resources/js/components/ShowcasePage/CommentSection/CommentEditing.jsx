import React, {useState, useEffect} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";

import RecaptchaField from "../../RecaptchaField";
import CommentTextArea from "./CommentTextArea";
import Button from "../../Button";
import getFormData from "../../../helpers/getFormData";
import {updateLastCommentSubmittedTime} from "../../../redux/actionBuilders/showcase";

type Props = {
    comment: Comment,
};


const ToggleButtonWrap = styled.div`
    text-align: right;
`;

const ToggleButton = styled.a`
    cursor: pointer;
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
    R.identity
)(function CommentEditing(props: Props) {
    const {comment} = props;
    const [open, setOpen] = useState(false);

    const content = open && <CommentEditingContent comment={comment} onSubmitFinish={() => setOpen(false)} />;
    const onDeleteButtonClick = () => setOpen(!open);
    const onEditButtonClick = () => setOpen(!open);

    return open ? content : (
        <ToggleButtonWrap>
            <ToggleButton onClick={onDeleteButtonClick}>delete</ToggleButton>
            <ToggleButton onClick={onEditButtonClick}>edit</ToggleButton>
        </ToggleButtonWrap>
    );
});
