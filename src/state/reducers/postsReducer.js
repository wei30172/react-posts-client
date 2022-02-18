import { ActionType } from "../actions/actionTypes"

export const postsReducer =  (posts = [], action) => {
  switch (action.type) {
    case ActionType.FECTCH_POSTS:
      return action.payload
    case ActionType.CREATE_POST:
      return [...posts, action.payload]
    case ActionType.UPDATE_POST:
    case ActionType.LIKE_POST:
      return posts.map(post => post._id === action.payload._id ? action.payload : post)
    case ActionType.DELETE_POST:
      return posts.filter(post => post._id !== action.payload)
    default:
      return posts
  }
}