import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExternalLink from '../../components/externalLink'
import { Instagram } from '../../components/fa'
import InstagramGallery from '../../components/instagram'

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
          <div className="col-8 col-md-12 pt-5 mx-auto">
            <h1
              className="text-center font-dancing-reg"
              style={{ fontSize: 50 }}
            >
              If you would like to see my most recent work go checkout my{' '}
              <ExternalLink
                href={`https://www.instagram.com/restoration_brow`}
                className="insta-link"
              >
                Instagram <Instagram className="menu-icon" />
              </ExternalLink>
            </h1>
          </div>
        </div>
        <InstagramGallery />
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
