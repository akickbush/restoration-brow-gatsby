import React from 'react'
import PropTypes from 'prop-types'

import Nav from '../nav'
import Header from '../header'
import '../../style/style.css'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Restoration Brow</footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
