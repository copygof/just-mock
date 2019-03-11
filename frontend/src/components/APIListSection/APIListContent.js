import React, { useState } from 'react'
import './styles/APIListContent.css'
import { FieldItem } from '../FieldItem'

function APIListContent(props) {
  return (
    <div id="api-list-content">
      {props.apiList.map((item, index) => (
        <FieldItem
          key={`item-${item.id}-${index}`}
          value={item.apiName}
          onClick={() => props.onClick(item.id)}
          onEnter={apiName => props.onEnter({ ...item, apiName })} />
      ))}
    </div>
  )
}

APIListContent.defaultProps = {
  apiList: [],
  onEnter() {},
  onClick() {},
}

export default APIListContent

