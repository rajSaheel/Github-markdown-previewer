import { useSelector } from "react-redux"

export const Preview = () => {
  const markup = useSelector(state => state.markup)

  return (
    <div id={"preview-area"}>
      <div id={"preview-toolbar"}><h3>Preview</h3></div>
      <div id={"preview"}>{markup}</div>
    </div>
  )
}