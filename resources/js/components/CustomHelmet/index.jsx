import React from "react";
import Helmet from "react-helmet";
import {withRouter} from "react-router";
import * as R from "ramda";

import useReduxState from "~/hooks/useReduxState";

type Props = {
    appBase: string,
    title: string,
    keywords: string,
    description: string,
    image: string,
    imageWidth: string,
    imageHeight: string,
    location: {
        pathname: string,
    },
};


const useAppBase = R.pipe(
    useReduxState,
    R.path(['config', 'appBase'])
);

function CustomHelmet(props: Props) {
    const {title, keywords, description, image, imageWidth, imageHeight, location} = props;
    const appBase = useAppBase();
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="subtitle" content={description} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={imageWidth} />
            <meta property="og:image:height" content={imageHeight} />
            <meta property="og:url" content={appBase + location.pathname} />
        </Helmet>
    );
}

CustomHelmet.defaultProps = {
    title: '360VRMuseum',
};

export default withRouter(CustomHelmet);
