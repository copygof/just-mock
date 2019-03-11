import React from 'react'
import './style.css'

function Section(props) {
  return (
    <div id="sections">
      {props.children}
    </div>
  )
}

export default Section