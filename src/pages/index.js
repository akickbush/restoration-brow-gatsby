import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Map from '../components/map'

import { INTRO } from '../config'

const A = Styled.a`
  color: #000000;
  &:hover {
    color: #000000;
  }
  `

const IndexPage = ({ data }) => {
  let intro = INTRO.map((item, i) => (
    <h3 key={i + 1} className="text-center pb-3">
      {item}
    </h3>
  ))
  // Image(s) from GraphQL
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  const logo = data.logo.edges[0].node.childImageSharp.fluid
  const spotlightOne = data.spot_one.edges[0].node.childImageSharp.fluid
  const spotlightTwo = data.spot_two.edges[0].node.childImageSharp.fluid
  const spotlightThree = data.spot_three.edges[0].node.childImageSharp.fluid
  const spotlightFour = data.spot_four.edges[0].node.childImageSharp.fluid
  const spotlightFive = data.spot_five.edges[0].node.childImageSharp.fluid
  const spotlightSix = data.spot_six.edges[0].node.childImageSharp.fluid
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
        <div className="row pt-4">
          <div className="col-6 mr-auto ml-auto">
            <Image fluid={logo} alt="Restoration Brow" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-10 col-md-6 mr-auto ml-auto">{intro}</div>
          <div className="col-10 col-md-6 mr-auto ml-auto ">
            <Map className="google-map" />
          </div>
        </div>

        <div className="row py-4 gradient-up">
          <div className="col-10 col-md-6 mr-auto ml-auto py-2">
            <h2 className="text-center">Address</h2>
            <h3 className="text-center">
              <A
                href="https://www.google.com/maps/place/2112+Armory+Dr,+Santa+Rosa,+CA+95401/@38.4583804,-122.7275444,17z/data=!3m1!4b1!4m5!3m4!1s0x80843873ddb598f7:0x7bcf0f707e431443!8m2!3d38.4583804!4d-122.7253504"
                rel="noopener noreferrer"
                target="_blank"
              >
                212 Armory Dr, Suite B<br />
                Platinum Salon
                <br />
                Santa Rosa, CA 95401
              </A>
            </h3>
          </div>
          <div className="col-10 col-md-6 mr-auto ml-auto py-2">
            <h2 className="text-center">Information</h2>
            <h3 className="text-center">
              Email:{' '}
              <A href={`mailto:alexis@restorationbrow.com`} target="_top">
                alexis@restorationbrow.com
              </A>
            </h3>
            <h3 className="text-center">
              Phone: <A href={`tel:707-494-6020`}>(707) 494-6020</A>
            </h3>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-md-12">
            <h1 className="text-center">Client Spotlights</h1>
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightOne}
              alt="Client Spotlight One"
              className="insta-img"
            />
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightTwo}
              alt="Client Spotlight Two"
              className="insta-img"
            />
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightThree}
              alt="Client Spotlight Three"
              className="insta-img"
            />
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightFour}
              alt="Client Spotlight Four"
              className="insta-img"
            />
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightFive}
              alt="Client Spotlight Five"
              className="insta-img"
            />
          </div>
          <div className="col-10 col-md-4 py-2 mr-auto ml-auto">
            <Image
              fluid={spotlightSix}
              alt="Client Spotlight Six"
              className="insta-img"
            />
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

    logo: allFile(filter: { name: { eq: "logo_b_600x205" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_one: allFile(filter: { name: { eq: "spotlight_one_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_two: allFile(filter: { name: { eq: "spotlight_two_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_three: allFile(filter: { name: { eq: "spotlight_three_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_four: allFile(filter: { name: { eq: "spotlight_four_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_five: allFile(filter: { name: { eq: "spotlight_five_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    spot_six: allFile(filter: { name: { eq: "spotlight_six_600x600" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
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
