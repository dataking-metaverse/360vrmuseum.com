import * as R from "ramda";

import useLang from "./useLang";

const useLangPath = R.converge(
    R.path, [
        R.identity,
        useLang,
    ]
);

export default useLangPath;
