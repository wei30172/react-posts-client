import * as authAPI from '../../../api'
import { ActionType } from "../actionTypes"

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await authAPI.signUp(formData)
    // console.log(data)
    dispatch({ // action
      type: ActionType.AUTH,
      payload: data
    })
    navigate('/')
  } catch(error) {
    console.log(error)
  }
}

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await authAPI.logIn(formData)
    // console.log(data)
    dispatch({ // action
      type: ActionType.AUTH,
      payload: data
    })
    navigate('/')
  } catch(error) {
    console.log(error)
  }
}

export const userAuth = (result, token) => async (dispatch) => {
  try {
    dispatch({ // action
      type: ActionType.AUTH,
      payload: { result, token }
    })
  } catch(error) {
    console.log(error)
  }
}