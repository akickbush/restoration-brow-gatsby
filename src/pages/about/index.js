import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import { ABOUT } from '../../config'

const About = ({ data }) => {
  let abouts = ABOUT.map((about, i) => <li key={i + 1}>{about}</li>)
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  const aboutImg = data.about.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Mom"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`About`}
    >
      <SEO title="About" />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <ul>{abouts}</ul>
          </div>
          <div className="col-md-6 text-center">
            <Image fluid={aboutImg} title="Family" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query aboutQuery {
    header: allFile(filter: { name: { eq: "tools_1252x698" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1252) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    about: allFile(filter: { name: { eq: "family_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  }
`

export default About
