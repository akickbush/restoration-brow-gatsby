import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Mom"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`Restoration Brow`}
    >
      <SEO title="Home" />
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
  query indexQuery {
    header: allFile(filter: { name: { eq: "mom_1249x771" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1249) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  }
`

export default IndexPage
