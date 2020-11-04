import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'

const MedicalHistoryPage = ({ data }) => {
  useEffect(() => {
    let mounted = true
    if (mounted && document && window) {
      // creating PMU script
      window['pmusigncode'] = '6c15c08c-63ea-4546-99b9-02ab181d3e5e'
      window['pmusignDiv'] = 'pmusignFormParentId'
      const script = document.createElement('script')
      script.src = '//pmusign.com/form-builder/assets/javascripts/pmusign.js'
      script.async = true
      script.onload = () => console.log('script loaded')
      document.body.appendChild(script)
    }
    return () => {
      mounted = false
    }
  }, [])
  // Image(s) from GraphQL
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Mom 2"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
    >
      <SEO title="Medical Form" />
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div id="pmusignFormParentId" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query medicalHistoryFormQuery {
    header: allFile(filter: { name: { eq: "servicesHeader_1250x704" } }) {
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

export default MedicalHistoryPage
