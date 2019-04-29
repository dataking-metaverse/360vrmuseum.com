import React from "react";
import Helmet from "react-helmet";
import {withRouter} from "react-router";
import * as R from "ramda";
import {connect} from "react-redux";

type Props = {
    appBase: string,
    title: string,
    keywords: string,
    description: string,
    image: string,
    imageWidth: string,
    imageHeight: string,
    url: string,
    location: {
        pathname: string,
    },
};


const CustomHelmet = R.compose(
    withRouter,
    connect(R.applySpec({
        appBase: R.path(['config', 'appBase']),
    }), R.always({}))
)(function CustomHelmet(props: Props) {
    const { appBase, title, keywords, description, image, imageWidth, imageHeight, url, location } = props;
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
});

export default CustomHelmet;

CustomHelmet.defaultProps = {
    title: '360VRMuseum',
};
