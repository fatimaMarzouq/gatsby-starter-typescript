import * as React from 'react'
import { Link, navigate } from 'gatsby'
// import { getUser, isLoggedIn, logout } from "../utils/auth"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const adminDoes = () => {
  const user = getProfile()
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi from admin Does page</h1>
          <p>Welcome to admin Does</p>
          <ul>
            <li>
              <Link to="/adminFetures/">admin Fetures</Link>
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
                <p>Hi, {user.name ? user.name : "friend"}!</p>
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

export default adminDoes
