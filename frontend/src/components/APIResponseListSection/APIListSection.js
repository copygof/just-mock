import React, { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
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
    if (_.isEmpty(apiList.selected)) {
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
  }, [apiList.selected])

  return (
    <Section>
      <APIListHeader
        onClick={() => dispatch(addNewAPIName())} />
      <APIListContent
        // apiList={apiList.items}
        onClick={id => dispatch(selectAPIName(id))}
        onChange={(apiName, id) => dispatch(changeAPIName(apiName, id))}
        onEnter={({ apiName, id }) => commitAddNewAPIName(apiName, id)} />
    </Section>
  )
}

export default APIListSection
