import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from "../utils/auth"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const adminDoes = () => (
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
            {isLoggedIn() ? (
              <Link
                to="/logout"
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/logout`))
                }}
              >
                Logout
              </Link>
            ) : null}
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default adminDoes