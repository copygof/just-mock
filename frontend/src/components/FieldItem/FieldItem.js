import React, { useState } from 'react'
import './styles.css'

function FieldItem(props) {
  const [apiName, setApiName] = useState(props.value)
  let [prevApiName, setPrevApiName] = useState(props.value);

  if (prevApiName !== props.value) {
    setPrevApiName(props.value)
    setApiName(props.value)
  }

  return (
    <div>
      <input
        className="field-items-input" 
        value={apiName}
        onChange={(e) =>  {
          setApiName(e.target.value)
          props.onChange(e.target.value)
        }}
        onClick={props.onClick}
        onKeyPress={({ key }) => key === 'Enter' && props.onEnter(apiName)} />
    </div>
  )
}

FieldItem.defaultProps = {
  onChange() {},
  onClick() {},
  onEnter() {},
}

export default FieldItem