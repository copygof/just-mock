import _ from 'lodash'
import R from 'ramda'
import { Maybe } from 'ramda-fantasy'

// @ts-check

/**
 * Format input money.
 * ---
 * @param {string} number - value 
 * @param {object} options - options for config format 
 * @param {string} options.symbol - currency symbol 
 * @param {number} options.percesion - percesion 
 * @param {string} options.decimal - decimal 
 * @param {string} options.seperate - percesion 
 * 
 * @default number '0'
 * @default options.symbol '$'
 * @default options.percesion 2
 * @default options.decimal '.'
 * @default options.seperate ','
 * 
 * @return {string} number format with currency symbol
 * 
 */
function currency(number, options = {
  symbol = '$',
  percesion = 2,
  decimal = '.',
  seperate = ','
}) {
  
  return ''
}

export default currency