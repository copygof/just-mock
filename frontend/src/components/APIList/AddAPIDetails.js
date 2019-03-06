import './stylesheets/APIList.css'
import React, { Fragment, useState, useEffect } from 'react'
import CallAPI from '../../API'
import APIDetails from './APIDetails'
import { Loading } from '../Loading'
import { ErrorMessage } from '../ErrorMessage'

import APIDetailsForm from './APIDetailsForm'

function AddAPIDetails() {
  const [isAddNewEndpoint, setIsAddNewEndpoint] = useState(false)
  return (
    <div>
      <button onClick={() => setIsAddNewEndpoint(true)}>Add new endpoint</button>
      <div class="modal" style={{ display: isAddNewEndpoint ? 'block' : 'none' }}>
        <div class="modal-content">
          <span class="close" onClick={() => setIsAddNewEndpoint(false)}>&times;</span>
          <p>Add a new endpoint</p>
          <APIDetailsForm
            onSubmit={value => alert(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default AddAPIDetails
