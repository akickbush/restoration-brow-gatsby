import React from 'react'
import PropTypes from 'prop-types'

import Nav from '../nav'
import Header from '../header'
import Footer from '../footer'
import '../../style/style.css'

const Layout = ({
  headerImg,
  imgCaption,
  height,
  mobileHeight,
  opacity,
  className,
  headerTitle,
  children,
}) => (
  <>
    <Nav />
    <Header
      headerImg={headerImg}
      imgCaption={imgCaption}
      height={height}
      mobileHeight={mobileHeight}
      opacity={opacity}
      className={className}
      headerTitle={headerTitle}
    />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  headerImg: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
