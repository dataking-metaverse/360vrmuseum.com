import React from "react";
import * as R from "ramda";

import ClickToViewShadow from "~/components/ClickToViewShadow";
import RatioGrid from "~/components/RatioGrid";
import useLang from "~/hooks/useLang";
import Showcase from "~/models/Showcase";
import {
    Text,
    PureLink,
    Image,
    MainTitle,
    Subtitle,
} from "./styled";

type Props = {|
    showcase: Showcase,
    ratio?: number,
|};

type InnerProps = {|
    showcase: Showcase,
|};

const firstThumbnail = R.path<string | number, string>(['props', 'list_of_images', 0, 'thumb']);
const mainTitle = R.invoker(1, 'getAttribute')('main_title');

const usePresentedByText = R.pipe(
    useLang,
    R.path(['components', 'showcaseRelated', 'presentedBy'])
);

const usePresentedBy = (showcase: Showcase) => {
    const presentedByText = usePresentedByText();
    return R.is(Showcase, showcase) ? presentedByText.replace('{presentedBy}', showcase.getAttribute('presented_by')) : null;
};

function ShowcaseCardInner(props: InnerProps) {
    const {showcase} = props;
    const presentedBy = usePresentedBy(showcase);
    if (!showcase) { return null; }
    return (
        <React.Fragment>
            <Image src={firstThumbnail(showcase)} />
            <Text>
                <MainTitle>{mainTitle(showcase)}</MainTitle>
                <Subtitle>e
                    {presentedBy}
                </Subtitle>
            </Text>
        </React.Fragment>
    );
}

export default function ShowcaseThumbnail(props: Props) {
    const {showcase, ratio} = props;
    const showcaseRoute = showcase.route();
    return (
        <PureLink to={showcaseRoute}>
            <RatioGrid ratio={ratio || .5625}>
                <ShowcaseCardInner showcase={showcase} />
                <ClickToViewShadow />
            </RatioGrid>
        </PureLink>
    );
};
