import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Contact = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Plants"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`Contact Me`}
    >
      <SEO title="Contact" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2>left column</h2>
          </div>
          <div className="col-md-6 text-center">
            <h2>right column</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query contactQuery {
    header: allFile(filter: { name: { eq: "tools_1250x722" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  }
`

export default Contact
