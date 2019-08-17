import React, { useState } from 'react'
import { graphql } from 'gatsby'
import axios from 'axios'
import Styled from 'styled-components'
import Image from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Input, Button } from '../../components/form'
import { Bars as Loading } from '../../components/loaders'

const URL = `/.netlify/functions/contact`

const A = Styled.a`
  color: #000000;
  &:hover {
    color: #000000;
  }
  `

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Contact = ({ data }) => {
  const [values, setValues] = useState({
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    message: '',
    messageError: '',
    submitError: '',
    submitSuccess: '',
  })
  const [disabled, setDisabled] = useState(false)
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value, [`${name}Error`]: '' })
  }
  const onSubmit = async e => {
    e.preventDefault()
    const { name, email, message } = values
    setDisabled(true)
    setValues({
      ...values,
      submitError: '',
    })
    const errors = {}
    if (!name) {
      errors.name = 'Please Name'
    }
    let fname, lname
    try {
      fname = capitalize(name.split(' ')[0])
    } catch {
      fname = ' '
    }
    try {
      lname = capitalize(name.split(' ')[1])
    } catch {
      lname = ' '
    }
    if (!email) {
      errors.email = 'Please Email'
    }
    const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(String(email).toLowerCase())) {
      errors.email = 'Email is invalid'
    }

    if (!message) {
      errors.message = 'Enter message'
    }
    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await axios.post(URL, {
          fname,
          lname,
          email,
          message,
        })
        setValues({
          ...values,
          submitError: '',
          submitSuccess: data.message,
          reason: '',
          name: '',
          email: '',
          message: '',
        })
        setDisabled(false)
      } catch (error) {
        const { response } = error
        const { data } = response
        setValues({
          ...values,
          submitError: data.message,
        })
        setDisabled(false)
      }
    } else {
      setDisabled(false)
      setValues({
        ...values,
        submitError: 'Please Fix Error(s)',
        reasonError: errors.reason,
        nameError: errors.name,
        emailError: errors.email,
        messageError: errors.message,
      })
    }
  }
  const renderButton = () => {
    if (disabled) {
      return (
        <div className="text-center">
          <Loading className="grid-loader" />
        </div>
      )
    } else {
      return (
        <Button
          className={'btn btn-restore contact--width'}
          disabled={disabled}
          onSubmit={onSubmit}
          text={'Send Me Message'}
        />
      )
    }
  }
  // Image(s) from GraphQL
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  const contactImg = data.contact.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Plants"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
      headerTitle={`Contact Me`}
    >
      <SEO title="Contact" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mr-auto ml-auto pt-5 pb-2">
            <h2
              className="text-center font-dancing-reg"
              style={{ fontSize: 35 }}
            >
              Contact me directly at
            </h2>
            <h3 className="text-center">
              <A href={`tel:707-494-6020`}>(707) 494-6020</A>
            </h3>
          </div>

          <div className="col-10 mr-auto ml-auto py-2">
            <hr />
          </div>

          <div className="col-md-6 mr-auto ml-auto pt-2 pb-3">
            <h2
              className="text-center font-dancing-reg"
              style={{ fontSize: 35 }}
            >
              Shoot me an email
            </h2>
            <h3 className="text-center">
              <A href={`mailto:alexis@restorationbrow.com`} target="_top">
                alexis@restorationbrow.com
              </A>
            </h3>
          </div>
          <div className="col-10 mr-auto ml-auto py-2">
            <hr />
          </div>
          <div className="col-md-6 mr-auto ml-auto pt-2">
            <h2
              className="text-center font-dancing-reg"
              style={{ fontSize: 35 }}
            >
              Visit me at
            </h2>
            <h3 className="text-center">
              <A
                href="https://www.google.com/maps/place/2112+Armory+Dr,+Santa+Rosa,+CA+95401/@38.4583804,-122.7275444,17z/data=!3m1!4b1!4m5!3m4!1s0x80843873ddb598f7:0x7bcf0f707e431443!8m2!3d38.4583804!4d-122.7253504"
                rel="noopener noreferrer"
                target="_blank"
              >
                2112 Armory Dr, Suite B<br />
                Platinum Salon
                <br />
                Santa Rosa, CA 95401
              </A>
            </h3>
          </div>
          <div className="col-10 mr-auto ml-auto pt-3">
            <hr />
          </div>
        </div>

        <form id="contact-target" className="form--contact pt-2 pb-5">
          <div className="row">
            <div className="col-md-6 mr-auto ml-auto pt-2">
              <h2
                className="text-center font-dancing-reg"
                style={{ fontSize: 35 }}
              >
                Or ask your questions here
              </h2>
            </div>
            <div className="col-md-8 mr-auto ml-auto">
              <section className="content">
                <Input
                  type="text"
                  name="name"
                  value={values.name}
                  id="name"
                  onChange={e => onChange(e.target.name, e.target.value)}
                  label="Name*"
                  error={values.nameError}
                />
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  id="email"
                  onChange={e => onChange(e.target.name, e.target.value)}
                  label="Email*"
                  error={values.emailError}
                />
                <Input
                  type="text"
                  label="Message*"
                  name="message"
                  value={values.message}
                  id="message"
                  onChange={e => onChange(e.target.name, e.target.value)}
                  error={values.messageError}
                />
              </section>

              {renderButton()}
              {values.submitError && (
                <div className="alert alert-danger mt-3  text-center">
                  <strong>{values.submitError}</strong>
                </div>
              )}
              {values.submitSuccess && (
                <div className="alert alert-success mt-3 text-center">
                  <strong>{values.submitSuccess}</strong>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query contactQuery {
    header: allFile(filter: { name: { eq: "tools_1252x698" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1252) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }

    contact: allFile(filter: { name: { eq: "contact_logo_600x600" } }) {
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

export default Contact
