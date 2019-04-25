import React, {useState, useEffect} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {connect} from "react-redux";

import RecaptchaField from "../../RecaptchaField";
import CommentTextArea from "./CommentTextArea";
import Button from "../../Button";
import getFormData from "../../../helpers/getFormData";

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
            submitRoute: R.path(['app', 'routes', 'api.comment.put']),
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
        }),
        R.always({})
    )
)(function CommentEditingContent(props: Props) {
    const {comment, text, submitRoute, onSubmitFinish} = props;
    const commentId = comment.getAttribute('id');
    const [editContent, setEditContent] = useState('');

    useEffect(() => {
        setEditContent(comment.getAttribute('content'));
    }, [comment.getAttribute('content')]);

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
                    () => setContent(''),
                    onSubmitFinish
                ))
            )
        )
    );

    const hasContent = Boolean(editContent);

    return (
        <React.Fragment>
            <br />
            <Form method="PUT" action="" onSubmit={onSubmit}>
                <RecaptchaField />
                <input type="hidden" name="id" value={commentId} />
                <CommentTextArea onChange={onTextAreaChange} value={editContent} />
                <div className="text-right">
                    <Button type="secondary" disabled={!hasContent}>{text.submitEditing}</Button>
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
    const onToggleButtonClick = () => setOpen(!open);

    return open ? content : (
        <ToggleButtonWrap>
            <ToggleButton onClick={onToggleButtonClick}>edit</ToggleButton>
        </ToggleButtonWrap>
    );
});
