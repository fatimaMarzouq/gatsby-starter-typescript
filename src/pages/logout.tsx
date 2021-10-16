import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const logout = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from logout page</h1>
        <p>Welcome to logout</p>
        <ul>
          <li>
            <Link to="/signin/">signin page</Link>
          </li>
          <li>
            <Link to="/">landing page</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default logout
