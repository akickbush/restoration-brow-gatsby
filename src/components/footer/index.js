import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Styled from 'styled-components'

import { LINKS } from '../../config'

const MyFooter = Styled.footer`
  width: 100%;
  color: white;
  background-color: black;
`
const FooterLeft = Styled.div`
  display: flex;
  justify-content: flex-start;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      margin: 5px;
    }
  }
  @media all and (max-width: 1000px) {
    justify-content: center;
  }
`
const FooterRight = Styled.div`
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      margin: 5px;
      a {
        color: $be-white;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media all and (max-width: 1000px) {
    justify-content: center;
  }
`

const Footer = () => {
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

  let footerLinks = LINKS.map((link, i) => {
    if (link.a) {
      return (
        <li key={i + 1} className="footer-link">
          <a href={link.a} rel="noopener noreferrer" target="_blank">
            {link.text}
          </a>
        </li>
      )
    } else {
      return (
        <li key={i + 1} className="footer-link">
          <Link to={link.link}>{link.text}</Link>
        </li>
      )
    }
  })

  return (
    <MyFooter>
      <div className="container-fluid mr-0 ml-0">
        <div className="row">
          <FooterLeft className="col-lg-6 justify-content-center">
            <Link to="/" className="footer-logo">
              <Image
                fluid={data.logo.childImageSharp.fluid}
                style={{ height: 100 }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </Link>
          </FooterLeft>
          <FooterRight className="col-lg-6 justify-content-center">
            <ul className="footer-links">{footerLinks}</ul>
          </FooterRight>
          <div className="col-12 text-center">
            &copy; {new Date().getFullYear()}, Restoration Brow
          </div>
        </div>
      </div>
    </MyFooter>
  )
}

export default Footer
