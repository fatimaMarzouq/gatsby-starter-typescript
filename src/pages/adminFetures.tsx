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
          <h1>Hi from admin Fetures page</h1>
          <p>Hi, {user.name ? user.name : "friend"}!</p>
          <p>Welcome to admin Fetures</p>
          <ul>
            <li>
              <Link to="/adminDoes/">admin Does</Link>
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
              <>
                <Link
                  to="/logout"
                  onClick={e => {
                    logout()
                    e.preventDefault()
                  }}
                >
                  Log Out
                </Link>
              </>

            </li>
          </ul>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default adminFetures
