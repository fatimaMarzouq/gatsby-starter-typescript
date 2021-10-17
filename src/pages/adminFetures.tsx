import * as React from 'react'
import { Link } from 'gatsby'
// import { getUser, isLoggedIn, logout } from "../utils/auth"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const adminFetures = () => {
  const user = getProfile()
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi, {user.name ? user.name : "friend"}!</h1>
          <p>Welcome to Admin Fetures Page</p>
          <ul>
            <li>
              Go to <Link to="/adminDoes/">Admin Does Page</Link>
            </li>
            <li>
              {/* {isLoggedIn() ? (
              <Link
                to="/logout"
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/logout`))
                }}
              >
                Logout
              </Link>
            ) : null} */}

              <Link
                to="/logout"
                onClick={e => {
                  logout()
                  e.preventDefault()
                }}
              >
                Log Out
              </Link>


            </li>
          </ul>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default adminFetures
