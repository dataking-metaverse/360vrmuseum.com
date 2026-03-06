import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import User from "../../../models/User";
import ModelsContext from "../../../contexts/ModelsContext";
import ShowcaseSectionTitle from "../components/ShowcaseSectionTitle";
import ShowcaseContainer from "../ShowcaseContainer";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import type {Axios} from "axios";


type Props = {
    user: User,
    text: {
        title: string,
    },
};

function CommentSection(props: Props) {
    const {User} = useContext(ModelsContext);
    const {user, text} = props;

    const canRead = User.hasPrivilegeSafe(user, 'readComments');
    const canWrite = User.hasPrivilegeSafe(user, 'writeComments');

    if (!canRead && !canWrite) { return null; }
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            {canWrite && <CommentForm />}
            <br /><br />
            {canRead && <CommentList />}
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            user: R.prop('user'),
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
        }),
        R.always({})
    )
)(CommentSection);
