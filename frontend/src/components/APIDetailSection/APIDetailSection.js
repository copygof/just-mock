import React, { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Section } from '../Section'
import { FieldItem } from '../FieldItem'
import { commitAddNewAPIName, changeAPIName, setTimeoutValue, setIsRandom } from '../../BL/apiList'
import { getStore } from '../../store'
import './styles.css'
import API from '../../API'
import { useCAllAPI } from '../../hooks'


function APIDetailSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state
  const { selected } = apiList

  const [isCreatingAPI, setIsCreatingAPI] = useState(false)
  const [isUpdateAPI, setIsUpdateAPI] = useState(false)

  useEffect(() => {

    axios({
      method: isUpdateAPI ? 'put' : 'post',
      url: `${API.baseUrl}/api/v1/endpoint`,
      data: {
        endpoint: selected.apiName,
        is_random: selected.isRandom,
        timeout: selected.timeout,
      }
    })
      .then(data => {
        dispatch(commitAddNewAPIName(selected.apiName, selected.id))
      })
      .finally(() => {
        setIsCreatingAPI(false)
        setIsUpdateAPI(false)
      })
  }, [isCreatingAPI, isUpdateAPI])


  return (
    <Section>
      <input
        className="api-name-input"
        value={selected.apiName}
        onChange={({ target }) => dispatch(changeAPIName(target.value, selected.id))}
        onKeyPress={({ key }) => {
          if (key === 'Enter') {
            setIsCreatingAPI(true)
          }
        }}
      />
      <div className="divider"/>
      <div>
        <div className="wrap-input">
          <p>URL: </p>
          <div className="wrap-url">
            <span>https://us-central1-just-mock.cloudfunctions.net/api/v1/{_.camelCase(selected.apiName || '  ')}</span>
          </div>
        </div>
        <div className="wrap-input" style={{ display: 'flex', flex: 0.3, }}>
            <p>Random: </p>
            <div className="wrap-random">
              <span>True</span> <input type="radio" name="random" checked={selected.isRandom} onClick={() => dispatch(setIsRandom(true))} />
              <span>False</span> <input type="radio" name="random" checked={!selected.isRandom} onClick={() => dispatch(setIsRandom(false))} />
            </div>
          </div>
          <div className="wrap-input">
            <p>Timeout: </p>
            <input type="number" value={selected.timeout} onChange={({ target }) => dispatch(setTimeoutValue(Number(target.value)))} />
          </div>
          <button className="btn" onClick={() => setIsUpdateAPI(true)}>Update</button>
      </div>
    </Section>
  )
}

export default APIDetailSection
