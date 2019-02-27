import _ from 'lodash'
import R from 'ramda'
import { Maybe } from 'ramda-fantasy'


const sefeNumber = value => typeof value === 'number' ? Maybe.Just(value) : Maybe.Nothing()
const sefeString = value => typeof value === 'string' ? Maybe.Just(value) : Maybe.Nothing()


const currency = (number) => {
  const numberValue = sefeString(number)
  return numberValue
}
