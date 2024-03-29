import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Section } from '../Section'
import APIListHeader from './APIListHeader'
import APIListContent from './APIListContent'
import {
  addNewAPIName,
  selectAPIName,
  changeAPIName,
  commitAddNewAPIName,
  setAPIList,
} from '../../BL/apiList'
import { getStore } from '../../store'
import API from '../../API'

function APIListSection() {
  const { state, dispatch } = getStore()
  const { apiList } = state

  const [hasGetAPIList, setHasGetAPIList] = useState(false)

  useEffect(() => {

    if (hasGetAPIList) {
      return
    }

    axios({
      method: 'GET',
      url: `${API.baseUrl}/api/v1`,
    })
      .then(data => {
        dispatch(setAPIList(data.data.data.map(value => ({
          ...value,
          apiName: value.id
        }))))
      })
      .finally(() => {
        setHasGetAPIList(true)
      })
  }, [hasGetAPIList])

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
