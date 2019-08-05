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
      headerTitle={`My Work`}
    >
      <SEO title="Gallery" />
      <Instagram />
    </Layout>
  )
}

export const query = graphql`
  query galleryQuery {
    header: allFile(filter: { name: { eq: "apply2_1250x704" } }) {
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

export default Gallery
