import React, { Fragment, useState, useEffect } from 'react'
import _ from 'lodash'
import './stylesheets/APIListItem.css'
import { Collapse } from '../Collapse'
import APIDetailsForm from './APIDetailsForm'

function APIDetails(props) {
  return (
    <APIDetailsForm
      name={props.name}
      timeout={props.timeout}
      isRandom={props.isRandom}
      isUpdate
      onSubmit={value => alert(value)}
    />
  )
}

export default APIDetails
  