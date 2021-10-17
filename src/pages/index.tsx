import * as React from 'react'
import { Link } from 'gatsby'
// import { getUser, isLoggedIn, logout } from "../utils/auth"

// import PrivateRoute from "../components/privateRoute"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { logout, getProfile } from "../utils/auth"
const IndexPage = () => {

  const user = getProfile()
  return (

    <IndexLayout>
      <Page>
        <Container>

          <div>Hi, {user.name ? user.name : <><p>friend, You should <Link to='signin'>signin</Link> to see restricted content!</p><p>Do not have account <a href="https://dev--i4eym-u.us.auth0.com/u/signup?state=hKFo2SBUUU9Sc3p3WmRBZ04wTFhkOTNhaldIZ2dzTzVaZGtQZ6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE1wNUpqc0pjN2UwRFZMT0RVenJGNzBubVZDTV9HbG1ko2NpZNkgQzR6S3FjZEdQemMyZEpvcUFUR1dWQUpNWDN0VjVOeEs">sign up</a></p></>}</div>
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
