
export const INITIAL_STATE = {
  items: [],
  selected: {
    // id: '',
    // apiName: '',
    // endpoint: '',
    // timeout: 0,
    // isRandom: true,
  }
}

export const SELECT_API_NAME = 'SELECT_API_NAME'
export function selectAPIName(apiId) {
  return {
    type: SELECT_API_NAME,
    id: apiId
  }
}

export const ADD_NEW_API_NAME = 'ADD_NEW_API_NAME'
export function addNewAPIName() {
  return {
    type: ADD_NEW_API_NAME,
    id: Date.now(),
  }
}

export const CHANGE_API_NAME = 'CHANGE_API_NAME'
export function changeAPIName(apiName, id) {
  return {
    type: CHANGE_API_NAME,
    id,
    apiName,
  }
}

export const COMMIT_ADD_NEW_API_NAME = 'COMMIT_ADD_NEW_API_NAME'
export function commitAddNewAPIName(apiName, id) {
  return {
    type: COMMIT_ADD_NEW_API_NAME,
    id,
    apiName,
  }
}

export const SET_ENDPOINT_NAME = 'SET_ENDPOINT_NAME'
export function setEndpointName(endpoint, id) {
  return {
    type: SET_ENDPOINT_NAME,
    id,
    endpoint,
  }
}

export const SET_TIMEOUT_VALUE = 'SET_TIMEOUT_VALUE'
export function setTimeoutValue(timeout, id) {
  return {
    type: SET_TIMEOUT_VALUE,
    id,
    timeout,
  }
}

export const SET_IS_RANDOM = 'SET_IS_RANDOM'
export function setIsRandom(isRandom, id) {
  return {
    type: SET_IS_RANDOM,
    id,
    isRandom,
  }
}

export const GET_API_LIST = 'GET_API_LIST'
export function setAPIList(items, id) {
  return {
    type: GET_API_LIST,
    id,
    items,
  }
}

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_API_LIST: {
      return {
        ...state,
        items: action.items
      }
    }
    case SELECT_API_NAME: {
      return {
        ...state,
        selected: {
          ...state.selected,
          ...state.items.find(v => v.id === action.id) || {},
          id: action.id
        }
      }
    }
    case ADD_NEW_API_NAME: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            endpoint: '',
            timeout: 0,
            isRandom: true,
            id: action.id,
            apiName: 'New API!!'
          }
        ]
      }
    }
    case COMMIT_ADD_NEW_API_NAME: {
      return {
        ...state,
        items: state.items.map(v => {
          if (v.id === action.id) {
            return {
              ...v,
              id: action.id,
              apiName: action.apiName,
            }
          }
          return v
        })
      }
    }
    case CHANGE_API_NAME: {
      return {
        ...state,
        items: state.items.map(v => {
          if (v.id === action.id) {
            return {
              ...v,
              id: action.id,
              apiName: action.apiName,
            }
          }
          return v
        }),
        selected: {
          ...state.selected,
          id: action.id,
          apiName: action.apiName,
        }
      }
    }
    case SET_ENDPOINT_NAME: {
      return {
        ...state,
        items: state.items.map(v => {
          if (v.id === action.id) {
            return {
              ...v,
              id: action.id,
              endpoint: action.endpoint,
            }
          }
          return v
        }),
        selected: {
          ...state.selected,
          id: action.id,
          endpoint: action.endpoint,
        }
      }
    }
    case SET_TIMEOUT_VALUE: {
      return {
        ...state,
        items: state.items.map(v => {
          if (v.id === action.id) {
            return {
              ...v,
              id: action.id,
              timeout: action.timeout,
            }
          }
          return v
        }),
        selected: {
          ...state.selected,
          id: action.id,
          timeout: action.timeout,
        }
      }
    }
    case SET_IS_RANDOM: {
      return {
        ...state,
        items: state.items.map(v => {
          if (v.id === action.id) {
            return {
              ...v,
              id: action.id,
              isRandom: action.isRandom,
            }
          }
          return v
        }),
        selected: {
          ...state.selected,
          id: action.id,
          isRandom: action.isRandom,
        }
      }
    }
    default:
      return state
  }
}


export default reducer
