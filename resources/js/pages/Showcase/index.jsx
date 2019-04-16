import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {withRouter} from "react-router";
import styled from "styled-components";
import {connect} from "react-redux";

import User from "../../models/User";
import {pushRedirect, pushMessage} from "../../redux/actionBuilders/global";
import ShowcasePage from "../../components/ShowcasePage";
import ModelsContext from "../../contexts/ModelsContext";
import page from "../../decorators/page";
import Message from "../../models/Message";


type Props = {
    // react router
    match: {
        params: {
            mid: string,
        },
    },

    // redux
    user: ?User,
    loginRoute: string,
    requestLogin: string,

    // redux dispatcher
    pushRedirect: (str: string) => void,
    pushMessage: (str: Message) => void,
};

const Root = styled.div`
    min-height: 80vh;
`;

function Showcase(props: Props) {
    const {user, pushRedirect, pushMessage, loginRoute, requestLogin} = props;
    const mid = R.path(['match', 'params', 'mid'])(props);
    const {Showcase: ShowcaseModel, User, Message} = useContext(ModelsContext);
    const [showcase, setShowcase] = useState(null);

    useEffect(() => {
        if (User.hasPrivilegeSafe(user,'viewShowcases')) {
            ShowcaseModel.get(mid).then(setShowcase);
        } else {
            setShowcase(null);
            pushMessage(new Message({message: requestLogin, appearance: 'success'}));
            pushRedirect(loginRoute);
        }
    }, [mid, user]);

    return (
        <Root>
            <ShowcasePage showcase={showcase} />
        </Root>
    );
}

export default R.compose(
    withRouter,
    page('showcase'),
    connect(R.applySpec({
        user: R.prop('user'),
        loginRoute: R.path(['app', 'routes', 'login']),
        requestLogin: R.path(['lang', 'pages', 'login', 'requestLogin']),
    }), R.applySpec({pushRedirect, pushMessage}))
)(Showcase);
