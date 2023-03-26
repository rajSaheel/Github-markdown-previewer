import { combineReducers } from "redux"

const EDIT_MARKUP = "EDIT_MARKUP"

export const editMarkup = (newMarkup) => {
  return {
    type: EDIT_MARKUP,
    newMarkup
  }
}

const defaultState =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:Heres some code, \`<div></div>\`, between 2 backticks.
There's also [links](https://www.freecodecamp.org), and
There is a **bold text**
> Block Quotes!
\`\`\`
  function sayHello(){
    hehe
  }
\`\`\`

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

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
