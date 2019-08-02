import React from 'react'
import { Link } from 'gatsby'

import { LINKS } from '../../config'

const MenuLinks = props => {
  let menu = LINKS.map((link, i) => {
    if (link.a) {
      return (
        <li key={i + 1}>
          <i aria-hidden="true" className={`fa ${link.icon}`}></i>
          <a href={link.a} rel="noopener noreferrer" target="_blank">
            {link.text}
          </a>
        </li>
      )
    } else {
      return (
        <li key={i + 1}>
          <i aria-hidden="true" className={`fa ${link.icon}`}></i>
          <Link to={link.link}>{link.text}</Link>
        </li>
      )
    }
  })
  return (
    <div className={props.menuStatus} id="menu">
      <ul>{menu}</ul>
    </div>
  )
}

export default MenuLinks
