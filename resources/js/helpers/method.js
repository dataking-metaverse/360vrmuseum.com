import * as R from "ramda";

const method = R.curry(function(methodName, object) {
    return object[methodName].call(object);
});

export default method;
