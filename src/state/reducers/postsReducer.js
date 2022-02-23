import { ActionType } from "../actions/actionTypes"

export const postsReducer =  (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case ActionType.START_LOADING:
      return { ...state, isLoading: true }
    case ActionType.END_LOADING:
      return { ...state, isLoading: false }
    case ActionType.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      }
    case ActionType.FETCH_POST:
      return { ...state, post: action.payload }
    case ActionType.FETCH_BY_SEARCH:
      return { ...state, posts: action.payload }
    case ActionType.CREATE_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case ActionType.UPDATE_POST:
    case ActionType.LIKE_POST:
    case ActionType.COMMENT_POST:
      return {...state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)}
    case ActionType.DELETE_POST:
      return {...state, posts: state.posts.filter(post => post._id !== action.payload)}
    default:
      return state
  }
}