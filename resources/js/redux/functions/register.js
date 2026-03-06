export default (type: string) => (dispatch: function) => (value: any) => dispatch({
    type,
    value,
});
