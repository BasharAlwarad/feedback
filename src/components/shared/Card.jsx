import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
  reverse: false,
}

Card.prototypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
