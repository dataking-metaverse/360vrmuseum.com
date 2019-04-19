import {
    LAST_COMMIT_SUBMITTED_TIME_UPDATE,
} from "../actionTypes";


export const updateLastCommentSubmittedTime = dispatch => () => dispatch({value: new Date, type: LAST_COMMIT_SUBMITTED_TIME_UPDATE});
