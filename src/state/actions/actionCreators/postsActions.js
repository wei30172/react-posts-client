import * as postsAPI from '../../../api'
import { ActionType } from "../actionTypes"

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.START_LOADING })
    const { data: { data, currentPage, numberOfPages } } = await postsAPI.fetchPosts(page)
    // console.log(data)
    dispatch({ // action
      type: ActionType.FETCH_ALL,
      payload: { data, currentPage, numberOfPages }
    })
    dispatch({ type: ActionType.END_LOADING })
  } catch(error) {
    console.log(error)
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.START_LOADING })
    const { data } = await postsAPI.fetchPost(id)
    // console.log(data)
    dispatch({
      type: ActionType.FETCH_POST,
      payload: data
    })
    dispatch({ type: ActionType.END_LOADING })
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.START_LOADING })
    const { data: { data } } = await postsAPI.fetchPostsBySearch(searchQuery)
    dispatch({ // action
      type: ActionType.FETCH_BY_SEARCH,
      payload: data
    })
    dispatch({ type: ActionType.END_LOADING })
  } catch(error) {
    console.log(error)
  }
}

export const createPost = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.START_LOADING })
    const { data } = await postsAPI.createPost(post)
    // console.log(data)
    dispatch({ type: ActionType.CREATE_POST, payload: data })
    navigate('/')
    // navigate(`/posts/${data._id}`)
  } catch(error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await postsAPI.updatePost(id, post)
    // console.log(data)
    dispatch({ // action
      type: ActionType.UPDATE_POST,
      payload: data
    })
  } catch(error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await postsAPI.deletePost(id)
    // console.log(data)
    dispatch({ // action
      type: ActionType.DELETE_POST,
      payload: id
    })
  } catch(error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await postsAPI.likePost(id)
    // console.log(data)
    dispatch({ // action
      type: ActionType.LIKE_POST,
      payload: data
    })
  } catch(error) {
    console.log(error)
  }
}

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await postsAPI.commentPost(value, id)
    // console.log(data)
    dispatch({ // action
      type: ActionType.COMMENT_POST,
      payload: data
    })
    return data.comments
  } catch(error) {
    console.log(error)
  }
}