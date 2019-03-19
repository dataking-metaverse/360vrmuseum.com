export type ReduxAction = {
    type: string,
    value: any,
};

type ResponsiveImage = {|
    src: string,
    srcSetObject: ?{ [string]: string },
|};
