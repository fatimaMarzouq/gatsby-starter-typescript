import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Account = () => {
  //   if (!isAuthenticated()) {
  //     login()
  //     return <p>Redirecting to login...</p>
  //   }

  // const user = getProfile()

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to Account page.</p>
          <p>Now go build something great.</p>
          {/* <Link
            to="/logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Log Out
          </Link> */}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Account

// import React from "react"
// import { Router } from "@reach/router"
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
// import { Link } from "gatsby"

// const Home = ({ user }) => {
//   return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
// const Settings = () => <p>Settings</p>
// const Billing = () => <p>Billing</p>

// const Account = () => {
//   if (!isAuthenticated()) {
//     login()
//     return <p>Redirecting to login...</p>
//   }

//   const user = getProfile()

//   return (
//     <>
//       <nav>
//         <Link to="/account/">Home</Link>{" "}
//         <Link to="/account/settings/">Settings</Link>{" "}
//         <Link to="/account/billing/">Billing</Link>{" "}
//         <a
//           href="#logout"
//           onClick={e => {
//             logout()
//             e.preventDefault()
//           }}
//         >
//           Log Out
//         </a>
//       </nav>
//       <Router>
//         <Home path="/account/" user={user} />
//         <Settings path="/account/settings" />
//         <Billing path="/account/billing" />
//       </Router>
//     </>
//   )
// }

// export default Account
