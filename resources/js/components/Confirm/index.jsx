import React from "react";
import ReactDOM from "react-dom";

import ConfirmActual from "./ConfirmActual";


const portalId = 'app-confirm-portal';
const node = document.getElementById(portalId);

export default function Confirm(props) {
    return ReactDOM.createPortal(
        <ConfirmActual {...props} />,
        node
    );
};
