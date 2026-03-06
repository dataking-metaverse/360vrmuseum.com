import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import ConfirmActual from "./ConfirmActual";


const portalId = 'app-confirm-portal';

export default function Confirm(props) {
    const [node, setNode] = useState(null);

    useEffect(() => {
        setNode(document.getElementById(portalId));
    });

    return node && ReactDOM.createPortal(
        <ConfirmActual {...props} />,
        node
    );
};
