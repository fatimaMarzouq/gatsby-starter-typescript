import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from "../utils/auth"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const regularFetures = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from regular Fetures page</h1>
        <p>Welcome to regular Fetures</p>
        <ul>
          <li>
            <Link to="/regularDoes/">regular Does</Link>
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

export default regularFetures