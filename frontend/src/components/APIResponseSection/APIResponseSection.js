import React, { useState, useEffect } from 'react'
import axios from 'axios'
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/json";
import _ from 'lodash'
import "brace/theme/github";
import { Section } from '../Section'
import { commitAddNewAPIName, changeAPIName, setTimeoutValue, setIsRandom } from '../../BL/apiList'
import { getStore } from '../../store'
import API from '../../API'
import { useCAllAPI } from '../../hooks'

export default function APIResponseSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state
  const { selected } = apiList

  const [isCreateResponse, setIsCreateResponse] = useState(false)
  const [isUpdateAPI, setIsUpdateAPI] = useState(false)

  const [responseName, setResponseName] = useState('')
  const [method, setMethod] = useState('GET')
  const [enable, setEnable] = useState(true)
  const [header, setHeader] = useState(JSON.stringify({}, null, '\t'))
  const [jsonResponse, setJsonResponse] = useState(JSON.stringify({}, null, '\t'))

  useEffect(() => {
    if (!isCreateResponse && !isUpdateAPI) {
      return
    }
    axios({
      method: isUpdateAPI ? 'put' : 'post',
      url: `${API.baseUrl}/api/v1/endpoint/response`,
      data: {
        endpoint: selected.apiName,
        response_name: responseName,
        method,
        enable,
        header: JSON.parse(header),
        json_response: JSON.parse(jsonResponse),
      }
    })
      .then(data => {
        // console.log('data', data)
        // dispatch(commitAddNewAPIName(selected.apiName, selected.id))
      })
      .finally(() => {
        setIsCreateResponse(false)
        setIsUpdateAPI(false)
      })
  }, [isCreateResponse, isUpdateAPI])

  return (
    <Section>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <div className="wrap-input">
          <p style={{ width: 130 }}>Response name: </p>
          <input type="text" value={responseName} onChange={({ target }) => setResponseName(target.value)} />
        </div>
      </div>
      <div className="divider"/>
      <div>
        <div className="wrap-input">
          <p>URL: </p>
          <div className="wrap-url">
            <span>https://us-central1-just-mock.cloudfunctions.net/api/v1/{_.camelCase(selected.apiName || '  ')}/{responseName}</span>
          </div>
        </div>
        <div className="wrap-input">
          <p>Method: </p>
          <input type="text" value={method} onChange={({ target }) => setMethod(target.value)} />
        </div>
        <div className="wrap-input" style={{ display: 'flex', flex: 0.3, }}>
          <p style={{ width: 140 }}>Enable to random: </p>
          <div className="wrap-random">
            <span>True</span> <input type="radio" name="enable" checked={enable} onClick={() => setEnable(true)} />
            <span>False</span> <input type="radio" name="enable" checked={!enable} onClick={() => setEnable(false)} />
          </div>
        </div>
        <div className="wrap-input" style={{ alignItems: 'flex-start' }}>
          <p>Header: </p>
          <div style={{ display: 'flex' }}>
            <AceEditor
              // width="800px"
              height="150px"
              placeholder="Placeholder Text"
              mode="json"
              theme="github"
              name="jsonResponse"
              // onLoad={this.onLoad}
              onChange={value => setHeader(value)}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={header}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>
        <div className="divider"/>
        <div className="wrap-input" style={{ alignItems: 'flex-start' }}>
          <p>Body: </p>
          <div style={{ display: 'flex' }}>
            <AceEditor
              // width="800px"
              // height="150px"
              placeholder="Placeholder Text"
              mode="json"
              theme="github"
              name="jsonResponse"
              // onLoad={this.onLoad}
              onChange={value => setJsonResponse(value)}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              // value={JSON.stringify(jsonResponse, null, '\t')}
              value={jsonResponse}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>
        <button className="btn" onClick={() => setIsCreateResponse(true)}>Create</button>
        <button className="btn" onClick={() => setIsUpdateAPI(true)}>Update</button>

      </div>
    </Section>
  )
}
