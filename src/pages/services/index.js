import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import { SERVICES } from '../../config'

const Services = ({ data }) => {
  let services = SERVICES.map((service, i) => (
    <li key={i + 1}>
      {service.name}
      {service.detail}
      {service.time}
      {service.cost}
      <a href={service.link} rel="noopener noreferrer" target="_blank">
        Book Now
      </a>
    </li>
  ))
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Mom 2"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`Services`}
    >
      <SEO title="Services" />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2>left column</h2>
          </div>
          <div className="col-md-6 text-center">
            <h2>right column</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>{services}</ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query servicesQuery {
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

export default Services
