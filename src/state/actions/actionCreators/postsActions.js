import * as postsAPI from '../../../api'
import { ActionType } from "../actionTypes"

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await postsAPI.fetchPosts()
    // console.log(data)
    dispatch({ // action
      type: ActionType.FECTCH_POSTS,
      payload: data
    })
  } catch(error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await postsAPI.createPost(post)
    // console.log(data)
    dispatch({ // action
      type: ActionType.CREATE_POST,
      payload: data
    })
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