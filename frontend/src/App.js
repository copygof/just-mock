import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Accordion, Button, Radio, Form, Input, Select, Label, TextArea } from 'semantic-ui-react'

import { Header } from './components/Header'




// const AccordionExampleNested = () => <Accordion defaultActiveIndex={0} panels={rootPanels} styled />


class APIList extends Component {

  state = {
    apiList: [],
  }

  async componentDidMount() {
    const apiList = await this.fetchAPI('http://localhost:5001/just-mock/us-central1/api/v1/')
    const apiDetail = await Promise.all(apiList.data.map(({ id }) => this.fetchAPI(`http://localhost:5001/just-mock/us-central1/api/v1/${id}?view=true`)))
    
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
    return (
      <div>
        <Form.Field>
          <Radio label="Enable for random response" labelPosition="left" toggle {...data.enable && { defaultChecked: true }} />
        </Form.Field>
        <br/>
        <Form.Field style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input
            labelPosition='right'
            value={`https://us-central1-just-mock.cloudfunctions.net/api/v1/${endpoint}/${data.id}`}  
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
          >
            <Label disabled>Method</Label>
            <Select compact options={options} defaultValue={data.method} />
          </Input>
          <Input
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
            value={`https://us-central1-just-mock.cloudfunctions.net/api/v1/${endpoint}/${data.id}`}  
          />
        </Form.Field>
        <br/>
        <Form>
          <Label>Header</Label>
          <TextArea
            autoHeight
            label='Header'
            labelPosition='left'
            placeholder='Header'
            style={{ minHeight: 100 }}
            defaultValue={JSON.stringify(data.header)}
          />
        </Form>
        <br/>
        <Form>
          <Label>Json response</Label>
          <TextArea
            autoHeight
            label='Json response'
            labelPosition='left'
            placeholder='Json response'
            style={{ minHeight: 100 }}
            defaultValue={JSON.stringify(data.json_response)}
          />
        </Form>
      </div>
    )
  }

  getApiContent = (data) => {
    let dataItems

    if (data.items ) {
      // {
      //   "id": "failure",
      //   "header": {},
      //   "enable": true,
      //   "method": "GET",
      //   "json_response": {
      //       "error": {
      //           "message": "data not found."
      //       },
      //       "code": "400"
      //   }
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
            value={`https://us-central1-just-mock.cloudfunctions.net/api/v1/${data.id}`}  
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
            <Button>Add new endpoint</Button>
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
      </div>
    );
  }
}

export default App;
