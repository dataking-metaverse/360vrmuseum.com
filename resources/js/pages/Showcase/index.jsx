import React, {useState, useEffect, useContext} from "react";
import * as R from "ramda";
import {withRouter} from "react-router";
import styled from "styled-components";
import {connect} from "react-redux";

import {pushRedirect, pushMessage} from "../../redux/actionBuilders/global";
import ShowcasePage from "../../components/ShowcasePage";
import ModelsContext from "../../contexts/ModelsContext";
import page from "../../decorators/page";


type Props = {
    match: {
        params: {
            mid: string,
        },
    },
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
        if (user instanceof User) {
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
