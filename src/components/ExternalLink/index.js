import React from 'react'

const ExternalLink = ({
  key,
  className,
  href,
  children,
  target = '_blank',
}) => (
  <a
    key={key}
    className={className}
    href={href}
    rel="noopener noreferrer"
    target={target}
  >
    {children}
  </a>
)

export default ExternalLink
