import React from "react"
import { handleAuthentication } from "../utils/auth"
// import PrivateRoute from "../components/privateRoute"

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>

}

export default Callback
