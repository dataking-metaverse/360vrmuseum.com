import React from "react";
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";

import Comment from "~/models/Comment";
import User from "~/models/User";
import CommentEditing from "./CommentEditing";

import type {Element} from "react";

type Props = {
    comment: Comment,
};

const SvgIcon = styled.svg`
    display: inline-block;
    vertical-align: middle;
    font-size: 1em;
    width: 1em;
    height: 1em;
`;
const person = <SvgIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z' /></SvgIcon>

const TopLine = styled.hr`
    margin: 0;
`;

const Root = styled.div`
    background-color: #fcfcfc;
    margin-bottom: 1rem;
    padding: 1.4rem;
`;

const Name = styled.div`
    
`;

const Content = styled.div`
    color: #747474;
    font-size: 1.6rem;
`;

const Date = styled.div`
    text-align: right;
    font-size: .8em;
    opacity: .6;
`;


export default function CommentItem(props: Props) {
    const {comment} = props;
    const user: User = comment.getUser();
    const isCurrentUser = User.isCurrentUser(user);
    const commentEditing: Element = (isCurrentUser && comment) ? <CommentEditing comment={comment} /> : null;
    return (
        <React.Fragment>
            <TopLine />
            <Root>
                <Row>
                    <Col md={6}><Name>{person}&nbsp;{user.getAttribute('name')}</Name></Col>
                    <Col md={6} className="text-right">
                        <Date>{comment.getAttribute('updated_at')}</Date>
                    </Col>
                </Row>
                <br />
                <Content>{comment.getAttribute('content')}</Content>
                {commentEditing}
            </Root>
        </React.Fragment>
    );
}
