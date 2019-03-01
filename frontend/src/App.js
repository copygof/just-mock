import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Accordion, Button, Radio, Form, Input, Select, Label, Modal, Image } from 'semantic-ui-react'
import AceEditor from 'react-ace';
import brace from 'brace';
import jsonMinifier from 'json-minifier'
import { Header } from './components/Header'

import 'brace/mode/json';
// import 'brace/theme/github';

const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5001/just-mock/us-central1' : 'https://us-central1-just-mock.cloudfunctions.net'




class AddNewApiButton extends Component {
  handleOnClick = () => {

  }

  render() {
    return (
      <Button onClick={this.handleOnClick}>Add new endpoint</Button>
      // <Modal trigger={<Button>Add new endpoint</Button>}
      //   style={{ß
      //     backgroundColor: 'pink',
      //     width: 200,
      //     height: 200,
      //     display: 'block',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     alignSelf: 'center',
      //     margin: '0 auto !important'
      //   }}
      // >
      //   <p>fdsfdsfjdsklfdklsfjdklsfj</p>
      // </Modal>\
    

    )
  }
}



class APIList extends Component {

  state = {
    apiList: [],
  }

  async componentDidMount() {
    const apiList = await this.fetchAPI(`${baseUrl}/api/v1/`)
    const apiDetail = await Promise.all(apiList.data.map(({ id }) => this.fetchAPI(`${baseUrl}/api/v1/${id}?view=true`)))
  
    this.setState({
      apiList: apiList.data.map(({ id, ...res }) => ({
        ...res,
        id,
        name: id,
        ...apiDetail.map(({ data }) => data).find(value => value.id === id)
      }))
    })
  }

  fetchAPI = (url) => fetch(url).then(response => response.json())

  getResponseDetail = (data, endpoint) => {
    const options = [
      { key: 'GET', text: 'GET', value: 'GET' },
      { key: 'POST', text: 'POST', value: 'POST' },
      { key: 'PUT', text: 'PUT', value: 'PUT' },
      { key: 'DELETE', text: 'DELETE', value: 'DELETE' },
    ]
    console.log('fdsnfdsfjdsf', jsonMinifier().minify(data.json_response))
    return (
      <div>
        <Form.Field>
          <Radio label="Enable for random response" labelPosition="left" toggle {...data.enable && { defaultChecked: true }} />
        </Form.Field>
        <br/>
        <Form.Field style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input
            labelPosition='right'
            value={`${baseUrl}/api/v1/${endpoint}/${data.id}`}  
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
          >
            <Label disabled>Method</Label>
            <Select compact options={options} defaultValue={data.method} />
          </Input>
          <Input
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
            value={`${baseUrl}/api/v1/${endpoint}/${data.id}`}  
          />
        </Form.Field>
        <br/>
        <Form>
          <Label>Header</Label>
          <AceEditor
            mode="json"
            name="header"
            // onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            style={{ minHeight: 50 }}
            highlightActiveLine={true}
            value={JSON.stringify(data.header, null, "  ")}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />  
        </Form>
        <br/>
        <Form>
          <Label>Json response</Label>
          <AceEditor
            mode="json"
            name="json_response"
            style={{ minHeight: 50 }}
            // onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={JSON.stringify(data.json_response, null, "  ")}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />  
        </Form>
      </div>
    )
  }

  getApiContent = (data) => {
    let dataItems

    if (data.items ) {
      dataItems = data.items.map(value => ({
        key: `${data.id}${value.id}`,
        title: value.id,
        content: { content: this.getResponseDetail(value, data.id) },
      }))
    }

    return (
      <div>
        <Form.Field style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 26 }}>
          <Input
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
            value={`${baseUrl}/api/v1/${data.id}`}  
          />
        </Form.Field>
        <br />
        <Form.Field style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Input
            label='Timeout'
            labelPosition='right'
            placeholder='Timeout'
            value={data.timeout}
          />
          <Radio label="Random response" labelPosition="left" toggle {...data.is_random && { defaultChecked: true }} />
        </Form.Field>
        {data.items && (
          <Accordion.Accordion panels={dataItems} />
        )}
      </div>
    )
  }

  getComputeApiListForAccordion = () => {
    return this.state.apiList.map(data => {
      return {
        ...data,
        key: data.id,
        title: data.name,
        content: { content: this.getApiContent(data) },
      }
    })
  }

  render() {
    console.log('response', this.state.apiList)

    return (
      <div>
        <div class="ui raised very padded text container segment">
          <h2 class="ui header">Just Mock Api</h2>
         
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <AddNewApiButton />
          </div>
          <br />
          <Accordion
            defaultActiveIndex={0}
            panels={this.getComputeApiListForAccordion()}
            styled
          />
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <APIList />
        <div style={{ zIndex: 9999, width: '100vw', height: '100vh', position: 'absolute',top: 0, left: 0, right: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center', background:'rgba(0,0,0,0.8)' }}>
          <div style={{  width: '50vw', height: '50vh', borderRadius: 5, padding: 16,  background: '#ffffff', display: 'flex', }}>
            <p>fhdjshfdjksfhkdsfhkjshf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
