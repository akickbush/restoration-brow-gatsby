import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import MenuLinks from './menu'

import { LINKS } from '../../config'

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_w_600x205.png" }) {
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

  let topNav = LINKS.map((link, i) => {
    if (link.a) {
      return (
        <li key={i + 1}>
          <a href={link.a} rel="noopener noreferrer" target="_blank">
            {link.text}
          </a>
        </li>
      )
    } else {
      return (
        <li key={i + 1}>
          <Link to={link.link} activeClassName="active-link">
            {link.text}
          </Link>
        </li>
      )
    }
  })

  let menuStatus = isOpen ? 'font-gada isopen d-sm-none' : 'font-gada d-sm-none'
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
        <ul className="top-nav d-none d-sm-flex">
          <li>
            <Link to="/" activeClassName="active-link">
              Home
            </Link>
          </li>
          {topNav}
        </ul>
      </div>
      <MenuLinks menuStatus={menuStatus} />
    </div>
  )
}

export default Nav
