import React, { useEffect, useState } from 'react'

import { Bars as Loading } from '../loaders'
import instafeed from 'react-instafeed'
import { CLIENT_ID, ACCESS_TOKEN, USER_ID } from '../../config'

const options = {
  limit: 18,
  accessToken: ACCESS_TOKEN,
  clientId: CLIENT_ID,
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  userId: USER_ID,
}

const Instagram = () => {
  const [images, setImages] = useState(null)
  useEffect(() => {
    const fetchFeed = async () => {
      const data = await instafeed(options)
      setImages(data.data)
    }
    fetchFeed()
  }, [])

  const renderFeed = () => {
    if (images) {
      const imgContainer = []
      for (let i = 0; i < images.length; i++) {
        imgContainer.push(
          <div key={images[i].id} className="col-lg-4">
            <a
              href={images[i].link}
              rel="noopener noreferrer"
              target="_blank"
              id={images[i].id}
            >
              <img
                src={images[i].images.standard_resolution.url}
                className="img-fluid insta-img"
                alt={images[i].caption}
              />
            </a>
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
