
export const INITIAL_STATE = {
  items: [],
  selected: {
    id: ''
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


const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
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
          { id: action.id, apiName: 'New API!!' }
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
    default:
      return state
  }
}


export default reducer
