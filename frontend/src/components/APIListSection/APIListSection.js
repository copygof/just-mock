import React, { useState } from 'react'
import { Section } from '../Section'
import APIListHeader from './APIListHeader'
import APIListContent from './APIListContent'

function APIListSection() {
  const [apiList, setAPIList] = useState([])

  return (
    <Section>
      <APIListHeader
        onClick={() => setAPIList([...apiList, { id: Date.now(), apiName: 'New API' }])} />
      <APIListContent
        apiList={apiList}
        onClick={id => { }}
        onEnter={item => setAPIList(apiList.map(v => v.id === item.id ? item : v))} />
    </Section>
  )
}

export default APIListSection
