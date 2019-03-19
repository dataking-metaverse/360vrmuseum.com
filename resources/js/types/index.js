export type ReduxAction = {
    type: string,
    value: any,
};

export type ResponsiveImage = {|
    src: string,
    srcSetObject: ?{ [string]: string },
|};

export type AccessCredential = {|
    access_token: string,
    token_type: string,
    expires_at: string,
|};
