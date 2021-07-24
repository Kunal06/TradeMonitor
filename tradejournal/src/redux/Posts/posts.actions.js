import postsTypes from "./posts.types";

export const addPostStart = (post) => ({
    type: postsTypes.ADD_POST_START,
    payload: post,
});

export const addPostSuccess = (post) => ({
    type: postsTypes.ADD_POST_SUCCESS,
    payload: post,
});

export const fetchPostsStart = (uid) => ({
    type: postsTypes.FETCH_POSTS_START,
    payload: uid,
});

export const fetchPostsSuccess = (posts) => ({
    type: postsTypes.FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const updatePostStart = (post) => ({
    type: postsTypes.UPDATE_POST_START,
    payload: post,
});

export const updatePostSuccess = (postData) => ({
    type: postsTypes.UPDATE_POST_SUCCESS,
    payload: postData,
});
