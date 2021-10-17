import * as React from 'react'
import { Link, navigate } from 'gatsby'
// import { getUser, isLoggedIn, logout } from "../utils/auth"

// import PrivateRoute from "../components/privateRoute"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
const IndexPage = () => {

  const user = getProfile()
  return (

    <IndexLayout>
      <Page>
        <Container>
          {/* <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
          <p>
            {isLoggedIn() ? (
              <>
                You are logged in, so check your{" "}
                <Link to="regularFetures">regular Does</Link>
              </>
            ) : (
              <>
                You should <Link to="signin">signin</Link> to see restricted
                content
              </>
            )}
          </p>

          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/logout`))
              }}
            >
              Logout
            </a>
          ) : null} */}
          <div>Hi, {user.name ? user.name : <p>friend, You should <Link to='signin'>signin</Link> to see restricted content!</p>}</div>
          {user.name ?
            <>
              You are logged in, so check your{" "}
              <Link to="regularFetures">regular Fetures</Link>
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
            : null}

        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
