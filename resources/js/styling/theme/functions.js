import * as R from "ramda";

import endsWith from "../../helpers/endsWith";

import type {Interpolation} from "styled-components";


export const px = (num: number | string) => endsWith(num + '', 'px');
export const rem = (num: number | string) => endsWith(num + '', 'rem');
export const percentage = (num: number | string) => endsWith(num + '', '%');


export const themeVar: (path: string | Array<string>) => Interpolation = R.pipe(
    R.when(
        R.pipe(R.type, R.equals('String')),
        R.split('.')
    ),
    R.concat(['theme', 'variables']),
    R.path
);

export const themeMixin: (path: string | Array<string>) => Interpolation = R.pipe(
    R.when(
        R.pipe(R.type, R.equals('String')),
        R.split('.')
    ),
    R.concat(['theme', 'mixins']),
    R.path
);
