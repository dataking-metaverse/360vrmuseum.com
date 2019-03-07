import * as R from "ramda";

const instanceOf = R.curry(function(classType, instance) {
    return instance instanceof classType;
});

export default instanceOf;
