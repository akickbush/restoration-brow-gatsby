import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Instagram from '../../components/instagram'

const Gallery = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Apply Two"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
    >
      <SEO title="Gallery" />
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-12 pb-2">
            <h1
              className="text-center font-dancing-reg"
              style={{ fontSize: 50 }}
            >
              My Work
            </h1>
          </div>
        </div>
        <Instagram />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query galleryQuery {
    header: allFile(filter: { name: { eq: "mom_1249x869" } }) {
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

export default Gallery
