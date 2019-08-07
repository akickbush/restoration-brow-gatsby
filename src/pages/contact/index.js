import React, { useState } from 'react'
import { graphql } from 'gatsby'
import axios from 'axios'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Input, Button } from '../../components/form'
import { Bars as Loading } from '../../components/loaders'

const URL = `/.netlify/functions/contact`

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
          text={'Send Message'}
        />
      )
    }
  }
  // Image(s) from GraphQL
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
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
        <form id="contact-target" className="form--contact">
          <div className="row">
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
                <div className="alert alert-danger m-t-20 text-center">
                  <strong>{values.submitError}</strong>
                </div>
              )}
              {values.submitSuccess && (
                <div className="alert alert-success m-t-20 text-center">
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
    header: allFile(filter: { name: { eq: "tools_1250x722" } }) {
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

export default Contact
