import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import MenuLinks from './menu'

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_t_600x205.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)
  const root = useRef(null)

  useEffect(() => {
    document.addEventListener('click', _handleDocumentClick, false)
    return () => {
      document.removeEventListener('click', _handleDocumentClick, false)
    }
  }, [isOpen])

  const _handleDocumentClick = e => {
    if (!root.current.contains(e.target) && isOpen === true) {
      setIsOpen(false)
    }
  }

  const _menuToggle = e => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  let menuStatus = isOpen ? 'isopen' : ''
  return (
    <div ref={root}>
      <div className="brow-nav">
        <div className="hambclicker" onClick={e => _menuToggle(e)}></div>
        <div id="hambmenu" className={menuStatus}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" className="nav-logo">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{ maxHeight: 40, top: 10 }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
      <MenuLinks menuStatus={menuStatus} />
    </div>
  )
}

export default Nav
