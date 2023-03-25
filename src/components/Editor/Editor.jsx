import "./Editor.css"
import { useSelector, useDispatch } from "react-redux"
import { editMarkup } from "../.././store/markup/markup.js"

export const Editor = () => {

  const markup = useSelector(state => state.markup)
  const dispatch = useDispatch()

  return (
    <div id={"editor-box"}>
      <div id={"tool-bar"}>
        <h3>Editor</h3>
      </div>
      <textarea id={"editor"} value={markup} onChange={(e) => dispatch(editMarkup(e.target.value))} />
    </div>
  )
}
