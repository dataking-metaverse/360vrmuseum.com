export default (type: string) => (dispatch: function) => () => dispatch({
    type,
});
