import React, { useState } from 'react'
import './styles.css'

function FieldItem(props) {
  const [apiName, setApiName] = useState(props.value)

  return (
    <div>
      <input
        className="field-items-input" 
        value={apiName}
        onChange={(e) => setApiName(e.target.value)}
        onClick={props.onClick}
        onKeyPress={({ key }) => key === 'Enter' && props.onEnter(apiName)} />
    </div>
  )
}

export default FieldItem