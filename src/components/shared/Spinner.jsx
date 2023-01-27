import React from 'react'

import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='...loading...'
      style={{ margin: 'auto', width: '100px', display: 'block' }}
    />
  )
}

export default Spinner
