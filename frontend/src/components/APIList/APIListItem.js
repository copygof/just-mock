import React, { Fragment, useState, useEffect } from 'react'
import './APIListItem.css'
import { Collapse } from '../Collapse'

function APIListItem(props) {
  return (
    <div>
      <Collapse>
        <Collapse.Header>API Name</Collapse.Header>
        <Collapse.Content>
          API Detail
        </Collapse.Content>
      </Collapse>
    </div>
  )
  return (
    <p className="api-name">
      API name: {props.name}
    </p>
  )
}
 export default APIListItem
  