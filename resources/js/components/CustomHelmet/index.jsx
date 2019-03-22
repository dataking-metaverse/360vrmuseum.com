import React from "react";
import {Helmet} from "react-helmet";

type Props = {
    title: string,
};


export default function CustomHelmet(props: Props) {
    return (
        <Helmet>
            {props.title && <title>{props.title}</title>}
        </Helmet>
    );
}
