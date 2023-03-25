import { combineReducers } from "redux"

const EDIT_MARKUP = "EDIT_MARKUP"

export const editMarkup = (newMarkup) => {
  return {
    type: EDIT_MARKUP,
    newMarkup
  }
}

const defaultState = "Default Markup"

const markup = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_MARKUP: return action.newMarkup
      break;
    default: return state
  }
}

export const markupApp = combineReducers({
  markup
})
