import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function APIDetailsForm(props) {
  const [name, setEndpointName] = useState(props.name)
  const [timeout, setResponseTimeout] = useState(props.timeout)
  const [isRandom, setIsRandom] = useState(props.isRandom)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({
      name,
      timeout,
      isRandom,
    })
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>{_.upperFirst(props.name)}</legend>
          <div>
            <label>Endpoint: </label>
            <input
              type="text"
              name="endpoint"
              disabled={props.isUpdate}
              value={name}
              onChange={e => setEndpointName(e.target.value)} />
          </div>
          <div>
            <label>Timeout: </label>
            <input
              type="number"
              name="timeout"
              disabled={props.isUpdate}
              value={timeout}
              onChange={e => setResponseTimeout(Number(e.target.value))} />
          </div>
          <div>
            <label>Random: </label>
            <input
              type="checkbox"
              name="is_random"
              checked={isRandom}
              onChange={() => setIsRandom(!isRandom)} />
          </div>
          <button type="submit">{props.isUpdate ? 'Update' : 'Add'}</button>
        </fieldset>
      </form>
    </div>
  )
}

APIDetailsForm.propTypes = {
  name: PropTypes.string,
  timeout: PropTypes.number,
  isRandom: PropTypes.bool,
  onSubmit: PropTypes.func,
}

APIDetailsForm.defaultProps = {
  name: '',
  timeout: 0,
  isRandom: true,
  isUpdate: false,
  onSubmit() {}
}

 export default APIDetailsForm
  