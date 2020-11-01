import React from 'react'
import PropTypes from 'prop-types'
import formatDistance from 'date-fns/formatDistance'
import { uk } from 'date-fns/esm/locale'

const Time = ({ date }) => {
  return (
    <>
      {formatDistance(new Date(date), Date.now(), {
        addSuffix: true,
        locale: uk,
      })}
    </>
  )
}

Time.propTypes = {
  date: PropTypes.string,
}
export default Time
