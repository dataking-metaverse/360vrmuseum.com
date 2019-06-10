import React, {useEffect} from "react";
import {withRouter} from "react-router";

import type {Axios} from "axios";

type Props = {|  |};

function SwitchPageHandler(props: Props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    return null;
}

export default withRouter<Props>(SwitchPageHandler);
