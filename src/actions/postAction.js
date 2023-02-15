import * as PostsApi from '../api/PostsRequests.js';

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" })
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETRIEVING_SUCCESS", data: data })
  } catch (error) {
    dispatch({ type: "RETRIEVING_FAILED" })
    console.log(error);
  }
}