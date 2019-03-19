import React from 'react'
import './styles/APIListHeader.css'

export default function APIListHeader(props) {
  return (
    <div id="api-list-header">
      <button onClick={props.onClick} className="btn">Add new API</button>
    </div>
  )
}
