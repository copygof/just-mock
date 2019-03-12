import React, { useState } from 'react'
import { Section } from '../Section'
import APIListHeader from './APIListHeader'
import APIListContent from './APIListContent'
import {
  addNewAPIName,
  selectAPIName,
  changeAPIName,
  commitAddNewAPIName,
} from '../../BL/apiList'
import { getStore } from '../../store'

function APIListSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state

  return (
    <Section>
      <APIListHeader
        onClick={() => dispatch(addNewAPIName())} />
      <APIListContent
        apiList={apiList.items}
        onClick={id => dispatch(selectAPIName(id))}
        onChange={(apiName, id) => dispatch(changeAPIName(apiName, id))}
        onEnter={({ apiName, id }) => commitAddNewAPIName(apiName, id)} />
    </Section>
  )
}

export default APIListSection
