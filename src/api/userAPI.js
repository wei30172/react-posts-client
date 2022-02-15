import axios, { AxiosResponse } from "axios"

// const baseUrl = "https://posts-node-server.herokuapp.com/"
const baseUrl = "http://localhost:5000/users"

export const userSignup = async ({ email, password }) => {
  try {
    const res = await fetch(baseUrl + "/signup", {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const userLogin = async ({ email, password }) => {
  try {
    const res = await fetch(baseUrl + "/login", {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const userLogout = async () => {
  const res = await fetch(baseUrl + "/logout", {
    credentials: 'include',
    headers: {'Content-Type': 'application/json'}
  })
  const data = await res.json()
}

export const userAuth = async () => {
  try {
    const res = await fetch(baseUrl + "/userAuth", {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}