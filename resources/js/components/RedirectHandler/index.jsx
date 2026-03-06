import React, {useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";

import useReduxAction from "~/hooks/useReduxAction";
import useReduxState from "~/hooks/useReduxState";
import * as actions from "~/redux/actionCreators/global";

type Props = {|  |};


function RedirectHandler(props: Props) {
    const {redirect} = useReduxState();
    const clearRedirect = useReduxAction(actions.clearRedirect);

    useEffect(() => {
        if (redirect) {
            props.history.push(redirect);
            clearRedirect();
        }
    }, [redirect]);

    return null;
}

export default withRouter<Props>(RedirectHandler);
