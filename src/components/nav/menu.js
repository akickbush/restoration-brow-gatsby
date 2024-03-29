import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { SIDE_NAV as LINKS } from '../../config'

const MenuLinks = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_b_600x205.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let menu = LINKS.map((link, i) => {
    if (link.a) {
      return (
        <li key={i + 1}>
          <a
            href={link.a}
            rel="noopener noreferrer"
            target="_blank"
            className="menu-li"
          >
            {link.text}
          </a>
        </li>
      )
    } else {
      return (
        <li key={i + 1}>
          <Link
            to={link.link}
            className="menu-li"
            activeClassName="active-link"
          >
            {link.text}
          </Link>
        </li>
      )
    }
  })
  return (
    <div className={props.menuStatus} id="menu">
      <Link to="/" className="nav-logo">
        <Image
          fluid={data.logo.childImageSharp.fluid}
          style={{ maxHeight: 40, top: 10 }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Link>
      <ul className="pt-3">{menu}</ul>
    </div>
  )
}

export default MenuLinks
