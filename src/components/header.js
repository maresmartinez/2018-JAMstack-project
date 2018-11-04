import React, { Component } from 'react'
import { Link } from 'gatsby'
import Login from './Login'


class Header extends Component {
  handleLogin = (fauna_token) => {
    console.log('handleLogin');
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <div
        style={{
          background: 'rgb(15, 157, 88)',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div>
            <Login onAuthChange={this.handleLogin}/>
          </div>
        </div>


      </div>
    )
  }
}


export default Header
