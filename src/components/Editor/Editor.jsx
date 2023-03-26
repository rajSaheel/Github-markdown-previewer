import "./Editor.css"
import { useSelector, useDispatch } from "react-redux"
import { editMarkup } from "../.././store/markup/markup.js"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Editor = () => {

  const markup = useSelector(state => state.markup)
  const dispatch = useDispatch()

  return (
    <div id={"editor-wrap"}>
      <div className={"tool-bar"}>
        <FontAwesomeIcon icon={faNewspaper} /><h3>Editor</h3>
      </div>
      <textarea id={"editor"} type={"text"} value={markup} onChange={(e) => dispatch(editMarkup(e.target.value))} />
    </div>
  )
}
