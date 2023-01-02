import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ text, style }) => {
  return (
    <header style={style}>
      <div className='container'>
        <h2>{text} </h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  style: { background: 'rgba(0,0,0,0.4)', color: '#ff6a95' },
}

Header.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
}

export default Header
