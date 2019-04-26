import {
    LAST_COMMIT_SUBMITTED_TIME_UPDATE,
} from "../actionTypes";


export const updateLastCommentSubmittedTime = dispatch => () => dispatch({type: LAST_COMMIT_SUBMITTED_TIME_UPDATE});
