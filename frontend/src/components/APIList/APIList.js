import React, { Fragment, useState, useEffect } from 'react'
import CallAPI from '../../API'
import APIListItem from './APIListItem'
import './APIList.css'

function APIList() {
  const { isFetching, code, data, error } = CallAPI.getAPIList()

  if (isFetching === true) {
    return 'Loading...';
  }

  if (code === 200) {
    return (
      <div>
        {data.map(value => (
          <Fragment key={value.id}>
            <APIListItem name={value.id} />
          </Fragment>
        ))}
      </div>
    )
  } else if (code !== null) {
    return (
      <div>
        Error
        error : { JSON.stringify(error) }
      </div>
    ) 
  }

  return null
  

}

export default APIList
