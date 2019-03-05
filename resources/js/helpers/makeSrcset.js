import * as R from "ramda";

const makeSrcset: (srcSetObject: { [string]: string | void }) => string | void = R.ifElse(
    R.complement(R.isNil),
    R.pipe(
        R.toPairs,
        R.mapObjIndexed(R.pipe(
            R.reverse,
            R.join(' ')
        )),
        R.values,
        R.join(', ')
    ),
    R.always(null)
);

export default makeSrcset;
