import {useContext} from "react";
import {ThemeContext} from "styled-components";
import * as R from "ramda";

const useTheme = R.pipe(
    R.always(ThemeContext),
    useContext
);

export default useTheme;
