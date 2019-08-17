import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const About = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  const aboutImg = data.about.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Mom"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
    >
      <SEO title="About" />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <h1
              className="text-center font-dancing-reg"
              style={{ fontSize: 50 }}
            >
              Hey Everyone!
            </h1>
            <h3>
              Thanks for checking out my Permanent Brows page! I am Alexis King
              Farias and I wanted to share a little about who I am and how I got
              here! Firstly, I am a mother to a handsome young boy, Heilyn, who
              lights up my world and talks my ear off. I am also a newlywed to
              my life partner, Eunise Farias. We married in Sayulita, Mexico on
              June 2, 2019 surrounded by our closest friends and family. I am so
              grateful to have found love and happiness with these two.
            </h3>
            <h1
              className="text-center font-dancing-reg py-3"
              style={{ fontSize: 40 }}
            >
              “Family: life’s greatest blessings. A group that dreams, laughs,
              plays and loves together."
            </h1>
          </div>
          <div className="col-md-6 text-center">
            <Image fluid={aboutImg} title="Family" />
          </div>
          <div className="col-md-12">
            <h3 className="pt-3 text-center">
              My love for eyebrow perfection has blossomed through brow
              evolution during the last 8 years. After high school I decided to
              venture off to Cosmetology School in Sacramento in 2011 where I
              completed all of my courses in hair and always had a joy for
              shaping and creating eyebrows with makeup. My love exploded for
              the creation of perfect eyebrows so I advanced from just makeup to
              waxing and tinting to a more permanent alternative. I have been
              offering Permanent Eyebrows by Restoration Brow since March 2016.
            </h3>
            <h3 className="pt-3 text-center">
              I am two times certified in permanent brows including powder brows
              and microblading. I believe in continued education, the phrase
              practice makes perfect and accepting new challenges. I am
              dedicated to my clients and my work because when you love what you
              do the sincerity just comes naturally. I have a passion for
              passion for eyebrows and a sincere joy knowing I have given my
              clients eyebrows to flaunt and be proud of! My education journey
              is far from over so I am excited to continue my knowledge and give
              better brows tomorrow as I did yesterday.
            </h3>
          </div>
          <div className="col-md-12">
            <h1
              className="text-center font-dancing-reg pt-3"
              style={{ fontSize: 40 }}
            >
              “Do it with passion or not at all”
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query aboutQuery {
    header: allFile(filter: { name: { eq: "aboutHeader_1250x704" } }) {
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

    about: allFile(filter: { name: { eq: "family_600x600" } }) {
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

export default About
