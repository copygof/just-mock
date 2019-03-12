import React from 'react'
import { Section } from '../Section'
import { FieldItem } from '../FieldItem'
import { commitAddNewAPIName, changeAPIName } from '../../BL/apiList'
import { getStore } from '../../store'

function APIDetailSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state
  const { selected } = apiList

  return (
    <Section>
      API Detail
      <FieldItem
        value={selected.apiName}
        onChange={apiName => dispatch(changeAPIName(apiName, selected.id))}
        onEnter={apiName => dispatch(commitAddNewAPIName(apiName, selected.id))}
      />
    </Section>
  )
}

export default APIDetailSection
