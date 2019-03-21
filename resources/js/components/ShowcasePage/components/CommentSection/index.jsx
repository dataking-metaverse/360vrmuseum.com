import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import ShowcaseSectionTitle from "../ShowcaseSectionTitle";
import ShowcaseContainer from "../../ShowcaseContainer";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import type {Axios} from "axios";


type Props = {
    text: {
        title: string,
    },
};

function CommentSection(props: Props) {
    const {text} = props;
    return (
        <ShowcaseContainer>
            <ShowcaseSectionTitle>{text.title}</ShowcaseSectionTitle>
            <CommentForm />
            <br /><br />
            <CommentList />
        </ShowcaseContainer>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'commentSection']),
        }),
        R.always({})
    )
)(CommentSection);
