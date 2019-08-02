import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(relativePath: { eq: "logo_w_600x205.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="header--container">
        <Link to="/">
          <Img fluid={data.headerLogo.childImageSharp.fluid} />
        </Link>
      </div>
    </header>
  )
}

export default Header
