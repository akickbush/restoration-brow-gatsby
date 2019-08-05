import React, { useEffect, useState, useRef } from 'react'
import MenuLinks from './menu'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const root = useRef(null)

  useEffect(() => {
    document.addEventListener('click', _handleDocumentClick, false)
    return () => {
      document.removeEventListener('click', _handleDocumentClick, false)
    }
  }, [isOpen])

  const _handleDocumentClick = e => {
    if (!root.current.contains(e.target) && isOpen === true) {
      setIsOpen(false)
    }
  }

  const _menuToggle = e => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  let menuStatus = isOpen ? 'font-gada isopen' : 'font-gada'
  return (
    <div ref={root}>
      <div className="brow-nav">
        <div className="hambclicker" onClick={e => _menuToggle(e)}></div>
        <div id="hambmenu" className={menuStatus}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MenuLinks menuStatus={menuStatus} />
    </div>
  )
}

export default Nav
