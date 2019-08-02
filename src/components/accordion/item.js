import React, { useState } from 'react'

import { Open } from '../fa'

const AccordionItem = props => {
  const [open, toggleOpen] = useState(false)

  const handleOnclick = () => {
    toggleOpen(!open)
  }
  return (
    <div className="col-md-12">
      <div className="accordion__item">
        <div className="accordion__item__title" onClick={handleOnclick}>
          <Open className={open ? 'close-svg svg-open' : 'close-svg'} />

          <h1 className="montserrat-regular">{props.title}</h1>
        </div>
        <div
          className={
            open
              ? 'accordion__item__content accordion-open'
              : 'accordion__item__content'
          }
        >
          {props.content.map(item => {
            return (
              <p className="montserrat-regular" key={item}>
                {item}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
