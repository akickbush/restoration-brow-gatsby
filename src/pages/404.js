import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Apply"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`Page Not Found`}
    >
      <SEO title="404" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query notFoundQuery {
    header: allFile(filter: { name: { eq: "apply_1250x703" } }) {
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

export default NotFoundPage
