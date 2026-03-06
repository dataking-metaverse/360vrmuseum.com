// TODO : there must be better solutions
import * as R from "ramda";

import matchWords from "./matchWords";

const countWords: (str: string) => number = R.pipe(
    matchWords,
    R.length
);

export default countWords;
