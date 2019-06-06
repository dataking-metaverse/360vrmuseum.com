import React from "react";
import * as R from "ramda";

import useLangPath from "~/hooks/useLangPath";
import useReduxState from "~/hooks/useReduxState";
import CustomHelmet from "~/components/CustomHelmet";

import type {Node} from "react";

export type Props = {|
    pageName: string,
    children: ?Node,
|};

const useDefaultMeta = R.pipe(
    useReduxState,
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
