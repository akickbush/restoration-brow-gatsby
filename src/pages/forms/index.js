import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const FormsPage = ({ data }) => {
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
      <SEO title="Forms" />
      <div className="container-fluid py-3">
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <Link to="/forms/appointment-policy" className="btn btn-restore">
              Appointment Policy
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <Link to="/forms/consent-form" className="btn btn-restore">
              Consent To Application Of Permanent Makeup Procedure
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <Link to="/forms/medical-history" className="btn btn-restore">
              Client Medical History
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <Link to="/forms/covid-release" className="btn btn-restore">
              Covid-19 Release Form
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <Link to="/forms/pre-post-procedure" className="btn btn-restore">
              Pre/Post-Procedure Instructions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query formsQuery {
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

export default FormsPage
