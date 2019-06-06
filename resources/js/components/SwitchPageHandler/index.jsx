import React, {useEffect} from "react";
import {withRouter} from "react-router";

import type {Axios} from "axios";
import type {ContextRouter} from "react-router";

type Props = {| ...ContextRouter |};

function SwitchPageHandler(props: Props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    return null;
}

export default withRouter<Props>(SwitchPageHandler);
