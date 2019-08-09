import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Card from '../../components/card'

import { SERVICES } from '../../config'

const CardContainer = Styled.div`
  color: #ffffff;
  background-color: rgba(0,0,0,0.6);
  padding: 10px;
  border-radius: 20px;
`

const A = Styled.a`
  color: #b7eaee;
  &:hover {
    color: #000000;
  }`

const Services = ({ data }) => {
  let services = SERVICES.map((service, i) => (
    <div className="col-md-6" key={i + 1}>
      <Card
        name={service.name}
        detail={service.detail}
        link={service.link}
        time={service.time}
        price={service.cost}
      />
    </div>
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
        <div className="row pb-5">
          <div className="col-md-6 mr-auto ml-auto">
            <CardContainer>
              <h2 className="text-center">
                Please download and fill out my{' '}
                <A
                  href="https://restoration-brow.s3-us-west-1.amazonaws.com/restorationBrow.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Consent Form
                </A>{' '}
                and bring with you to your appointment. Thanks!
              </h2>
            </CardContainer>
          </div>
        </div>

        <div className="row">{services}</div>
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
