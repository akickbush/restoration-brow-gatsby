import React from 'react'
import Styled from 'styled-components'
import Image from 'gatsby-image'

const CardContainer = Styled.div`
  cursor: pointer;
  background-color: #eee !important;
  &:hover {
      opacity: 0.8;
  }
`
const CardButton = Styled.a`
  flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  background-color: black;
  font-size: 2rem;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  &:hover {
    color: white;
    opacity: 0.6;
    text-decoration: none;
  }
`
const Card = ({ img, name, detail, link, time, price }) => {
  return (
    <CardContainer
      className="card my-2"
      onClick={() => window.open(link, '_blank')}
    >
      <Image fluid={img} className="card-img-top" />
      <div className="card-body my-2 mx-2 text-center">
        <h1 className="card-title">{name}</h1>
        <p className="card-text mb-0">{detail}</p>
        <p className="card-text">
          <small>Time: {time}</small> <small>Price: {price}</small>
        </p>
        <CardButton
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="font-gada"
        >
          Book Now
        </CardButton>
      </div>
    </CardContainer>
  )
}

export default Card
