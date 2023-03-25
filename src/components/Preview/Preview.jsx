import { useSelector } from "react-redux"
import { marked } from "marked"

export const Preview = () => {
  const markup = useSelector(state => state.markup)
  marked.setOptions({
    breaks:true,
    sanitise:true
  })

  return (
    <div id={"preview-area"}>
      <div id={"preview-toolbar"}><h3>Preview</h3></div>
      <div id={"preview"}>{marked.parse(markup)}</div>
    </div>
  )
}