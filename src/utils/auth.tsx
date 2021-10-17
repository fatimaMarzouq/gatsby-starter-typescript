import auth0 from "auth0-js"
const isBrowser = typeof window !== "undefined"
let auth: any
if (isBrowser) {
  auth = new auth0.WebAuth({
    domain: process.env.AUTH0_DOMAIN || '',
    clientID: process.env.AUTH0_CLIENTID || '',
    redirectUri: process.env.AUTH0_CALLBACK,
    responseType: "token id_token",
    scope: "openid profile email",
  })
}

import { navigate } from "gatsby"

// ...

// insert after auth const
const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: 0,
}

let user: any = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem("isLoggedIn") === "true"
}
export const getAuth = () => {


  return auth0
}
export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => { }) => (err: any, authResult: any) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", "true")
    navigate("/")
    cb()
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}
export const silentAuth = (callback: (() => any)) => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", "false")
  auth.logout()
}

// export const isBrowser = () => typeof window !== "undefined"

// export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("gatsbyUser")
//     ? JSON.parse(String(window.localStorage.getItem("gatsbyUser")))
//     : {}

// const setUser = (user: any) =>
//   window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

// export const handleLogin = (username: string, password: string) => {
//   if (username === `admin` && password === `pass`) {
//     return setUser({
//       username: `admin`,
//       name: `admin`,
//       email: `admin@example.org`,
//       role: `admin`
//     })
//   } else if (username === `regular` && password === `pass`) {
//     return setUser({
//       username: `regular`,
//       name: `regular user`,
//       email: `regular@example.org`,
//       role: `regular`
//     })
//   }

//   return false
// }

// export const isLoggedIn = () => {
//   const user = getUser()

//   return !!user.username
// }

// export const logout = (callback: (() => void)) => {
//   setUser({})
//   callback()
// }
