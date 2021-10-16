import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = (Component: any, location: any, ...rest: any) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/signin")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
