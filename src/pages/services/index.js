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
  font-size: 35px;
  color: #b7eaee;
  &:hover {
    color: #000000;
  }`

const Services = ({ data }) => {
  // Image(s) from GraphQL
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  const combinationImg = data.combination.edges[0].node.childImageSharp.fluid
  const microbladeImg = data.microblade.edges[0].node.childImageSharp.fluid
  const powderImg = data.powder.edges[0].node.childImageSharp.fluid
  // placeholders
  const annualImg = data.annual.edges[0].node.childImageSharp.fluid
  const perfectingImg = data.perfecting.edges[0].node.childImageSharp.fluid
  const touchupImg = data.touchup.edges[0].node.childImageSharp.fluid
  const browwaxshapeImg = data.browwaxshape.edges[0].node.childImageSharp.fluid
  const browwaxtintImg = data.browwaxtint.edges[0].node.childImageSharp.fluid
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
                  className="font-dancing-reg"
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

        <div className="row">
          <div className="col-md-6">
            <Card
              img={microbladeImg}
              name={SERVICES.MICROBLADING.name}
              detail={SERVICES.MICROBLADING.detail}
              link={SERVICES.MICROBLADING.link}
              time={SERVICES.MICROBLADING.time}
              price={SERVICES.MICROBLADING.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={powderImg}
              name={SERVICES.OMBRE.name}
              detail={SERVICES.OMBRE.detail}
              link={SERVICES.OMBRE.link}
              time={SERVICES.OMBRE.time}
              price={SERVICES.OMBRE.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={combinationImg}
              name={SERVICES.COMBINATION.name}
              detail={SERVICES.COMBINATION.detail}
              link={SERVICES.COMBINATION.link}
              time={SERVICES.COMBINATION.time}
              price={SERVICES.COMBINATION.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={annualImg}
              name={SERVICES.ANNUAL.name}
              detail={SERVICES.ANNUAL.detail}
              link={SERVICES.ANNUAL.link}
              time={SERVICES.ANNUAL.time}
              price={SERVICES.ANNUAL.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={perfectingImg}
              name={SERVICES.PERFECTING.name}
              detail={SERVICES.PERFECTING.detail}
              link={SERVICES.PERFECTING.link}
              time={SERVICES.PERFECTING.time}
              price={SERVICES.PERFECTING.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={touchupImg}
              name={SERVICES.TOUCHUP.name}
              detail={SERVICES.TOUCHUP.detail}
              link={SERVICES.TOUCHUP.link}
              time={SERVICES.TOUCHUP.time}
              price={SERVICES.TOUCHUP.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={browwaxshapeImg}
              name={SERVICES.BROWWAXSHAPE.name}
              detail={SERVICES.BROWWAXSHAPE.detail}
              link={SERVICES.BROWWAXSHAPE.link}
              time={SERVICES.BROWWAXSHAPE.time}
              price={SERVICES.BROWWAXSHAPE.price}
            />
          </div>
          <div className="col-md-6">
            <Card
              img={browwaxtintImg}
              name={SERVICES.BROWWAXTINT.name}
              detail={SERVICES.BROWWAXTINT.detail}
              link={SERVICES.BROWWAXTINT.link}
              time={SERVICES.BROWWAXTINT.time}
              price={SERVICES.BROWWAXTINT.price}
            />
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

    combination: allFile(filter: { name: { eq: "combination_751x462" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    microblade: allFile(filter: { name: { eq: "microblade_751x346" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    powder: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    annual: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    perfecting: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    touchup: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    browwaxshape: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    browwaxtint: allFile(filter: { name: { eq: "powder_751x455" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 751) {
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
