import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Bars as Loading } from '../loaders'

const shuffle = array => {
  const n = array.sort(() => Math.random() - 0.5)
  return n
}

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      insta: allFile(filter: { relativeDirectory: { eq: "insta" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)

  const [images, setImages] = useState(null)
  useEffect(() => {
    if (data.insta.edges.length > 0) {
      const arr = data.insta.edges
      const shuffled = shuffle(arr)
      setImages(shuffled)
    }
  }, [data])

  const renderFeed = () => {
    if (images) {
      const imgContainer = []
      for (let i = 0; i < images.length; i++) {
        const {
          childImageSharp: { fluid },
          name,
        } = images[i].node
        imgContainer.push(
          <div key={name} className="col-lg-4">
            <Img fluid={fluid} className="img-fluid insta-img" alt={name} />
          </div>
        )
      }
      return (
        <div className="row mt-4 py-4" style={{ marginBottom: 100 }}>
          {imgContainer}
        </div>
      )
    }
    return (
      <div className="text-center" style={{ height: '100vh' }}>
        <Loading className="grid-loader" />
      </div>
    )
  }

  return <>{renderFeed()}</>
}

export default Instagram
