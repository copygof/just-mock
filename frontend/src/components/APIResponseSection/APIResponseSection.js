import React from 'react'
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/json";
import "brace/theme/github";
import { Section } from '../Section'

export default function APIResponseSection() {
  return (
    <Section>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <div className="wrap-input">
          <p style={{ width: 130 }}>Response name: </p>
          <input type="text" />
        </div>
      </div>
      <div className="divider"/>
      <div>
        <div className="wrap-input">
          <p>URL: </p>
          <div className="wrap-url">
            <span>https://us-central1-just-mock.cloudfunctions.net/api/v1/</span>
          </div>
        </div>
        <div className="wrap-input">
          <p>Method: </p>
          <input type="text" />
        </div>
        <div className="wrap-input" style={{ display: 'flex', flex: 0.3, }}>
          <p style={{ width: 140 }}>Enable to random: </p>
          <div className="wrap-random">
            <span>True</span> <input type="radio" name="enabled" value="true"/>
            <span>False</span> <input type="radio" name="enabled" value="false"/>
          </div>
        </div>
        <div className="wrap-input">
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
              // onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={JSON.stringify({ uno: 1, dos: 2 }, null, '\t')}
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
        <div className="wrap-input">
          <p>Body: </p>
          <div style={{ display: 'flex' }}>
            <AceEditor
              // width="800px"
              height="150px"
              placeholder="Placeholder Text"
              mode="json"
              theme="github"
              name="jsonResponse"
              // onLoad={this.onLoad}
              // onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={JSON.stringify({ uno: 1, dos: 2 }, null, '\t')}
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
      </div>
    </Section>
  )
}
