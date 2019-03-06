import './stylesheets/APIList.css'
import React, { Fragment, useState, useEffect } from 'react'
import CallAPI from '../../API'
import APIDetails from './APIDetails'
import AddAPIDetails from './AddAPIDetails'
import { Loading } from '../Loading'
import { ErrorMessage } from '../ErrorMessage'

function APIList() {
  const { isFetching, code, data, error } = CallAPI.getAPIList()

  if (isFetching === true) {
    return <Loading />
  }

  if (code !== 200) {
    return <ErrorMessage />
  }
  return (
    <div>
     <AddAPIDetails />
      {data.map(value => (
        <Fragment key={value.id}>
          <APIDetails
            name={value.id}
            timeout={value.timeout}
            isRandom={value.is_random} />
        </Fragment>
      ))}
    </div>
  )
  
}

export default APIList
