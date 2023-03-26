import { useSelector } from "react-redux"
import { marked } from "marked"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Preview = () => {

  const markup = useSelector(state => state.markup)
  marked.setOptions({
    breaks: true,
  })

  const dirty = marked.parse(markup)

  return (
    <div id={"preview-wrap"}>
      <div className={"tool-bar"}><FontAwesomeIcon icon={faMagnifyingGlass} /><h3>Preview</h3></div>
      <div id={"preview"} dangerouslySetInnerHTML={{ __html: dirty }} />
      {/*       <div id={"preview"}>{DOMPurify.sanitize(dirty)}</div> */}
      {/*       <div id={"preview"}><>{sanitize(dirty)}</></div> */}

    </div >
  )
}