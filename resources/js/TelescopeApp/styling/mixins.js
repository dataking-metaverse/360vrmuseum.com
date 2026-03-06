import * as R from "ramda";

import type {InjectedProps} from "styled-components";

const borderHeight: (injected: InjectedProps) => number = R.path(['theme', 'topBorder', 'height']);
const borderColor: (injected: InjectedProps) => string = R.path(['theme', 'topBorder', 'color']);
export const topBorder = (injected: InjectedProps) => `
    border-top: ${borderHeight(injected)}rem solid ${borderColor(injected)};
`;
