import * as React from 'react'
// import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const signin = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <IndexLayout>
      <Page>
        <Container>
          {/* <h1>Hi from signin page</h1>
        <p>Welcome to signin</p>
        <form>
          <div><label>Username <input type="text" /></label></div><br />
          <div><label>Password <input type="password" /></label></div><br />
          <div><input type="submit" value="signin" /></div>
        </form> */}

        </Container>
      </Page>
    </IndexLayout>
  )
}

export default signin
// import { navigate } from "gatsby"
// import { handleLogin, isLoggedIn, getUser } from "../utils/auth"

// class signin extends React.Component {
//   state = {
//     username: ``,
//     password: ``,
//   }

//   handleUpdate = (event: any) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   handleSubmit = (event: any) => {
//     event.preventDefault()
//     handleLogin(this.state.username, this.state.password)
//   }

//   render() {
//     if (isLoggedIn()) {
//       if (getUser().role == "admin") {
//         navigate(`/adminFetures`)
//       } else if (getUser().role == "regular") {
//         navigate(`/regularFetures`)
//       }

//     }

//     return (
//       <IndexLayout>
//         <Page>
//           <Container>
//             <h1> signin</h1>
//             <form
//               method="post"
//               onSubmit={event => {
//                 this.handleSubmit(event)
//                 navigate(`/signin`)
//               }}
//             >
//               <label>
//                 Username
//                 <input type="text" name="username" onChange={this.handleUpdate} />
//               </label>
//               <label>
//                 Password
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={this.handleUpdate}
//                 />
//               </label>
//               <input type="submit" value="Log In" />
//             </form>
//           </Container>
//         </Page>
//       </IndexLayout>
//     )
//   }
// }

// export default signin
