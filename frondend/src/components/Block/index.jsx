import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Block.scss'

const Block = ({children}) => {
  return (
    <div className='block'>
        {children}
    </div>
  )
}



export default Block
