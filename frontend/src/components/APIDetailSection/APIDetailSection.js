import React from 'react'
import { Section } from '../Section'
import { FieldItem } from '../FieldItem'
import { commitAddNewAPIName, changeAPIName } from '../../BL/apiList'
import { getStore } from '../../store'
import './styles.css'

function APIDetailSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state
  const { selected } = apiList

  return (
    <Section>
      
      {/* <FieldItem
        value={selected.apiName}
        onChange={apiName => dispatch(changeAPIName(apiName, selected.id))}
        onEnter={apiName => dispatch(commitAddNewAPIName(apiName, selected.id))}
      /> */}
      {/* <div className="divider"/> */}

      <input
        className="api-name-input"
        value={selected.apiName}
        // onChange={apiName => dispatch(changeAPIName(apiName, selected.id))}
        // onEnter={apiName => dispatch(commitAddNewAPIName(apiName, selected.id))}
      />

      <div className="divider"/>

      <div>
        <div className="wrap-input">
          <p>URL: </p>
          <div className="wrap-url">
            <span>https://us-central1-just-mock.cloudfunctions.net/api/v1/</span>
            <input className="url-input" />
          </div>
        </div>
        <div className="wrap-input" style={{ display: 'flex', flex: 0.3, }}>
            <p>Random: </p>
            <div className="wrap-random">
              <span>True</span> <input type="radio" name="random" value="true"/>
              <span>False</span> <input type="radio" name="random" value="false"/>
            </div>
          </div>
          <div className="wrap-input">
            <p>Timeout: </p>
            <input type="number" />
          </div>
      </div>


    </Section>
  )
}

export default APIDetailSection
