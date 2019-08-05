import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { LINKS } from '../../config'

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
          <a href={link.a} rel="noopener noreferrer" target="_blank">
            {link.icon} {link.text}
          </a>
        </li>
      )
    } else {
      return (
        <li key={i + 1}>
          <Link to={link.link}>
            {link.icon} {link.text}
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
      <ul>{menu}</ul>
    </div>
  )
}

export default MenuLinks
