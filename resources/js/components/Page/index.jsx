import React from "react";
import * as R from "ramda";

import useLangPath from "~/hooks/useLangPath";
import useReactState from "~/hooks/useReactState";
import CustomHelmet from "../CustomHelmet";

import type {Node} from "react";

type Props = {|
    pageName: string,
    children: ?Node,
|};

const useDefaultMeta = R.pipe(
    useReactState,
    R.path(['config', 'defaultMeta'])
);

export default function Page(props: Props) {
    const Component = () => {
        const pageMeta = useLangPath(['pages', props.pageName, 'meta']);
        const defaultMeta = useDefaultMeta();
        const realMeta = R.mergeLeft(pageMeta, defaultMeta);
        return (
            <>
                <CustomHelmet {...realMeta} />
                {props.children}
            </>
        );
    };
    return <Component />;
}

Page.defaultProps = {
    children: null,
};
