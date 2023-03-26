import { useSelector } from "react-redux"
import { marked } from "marked"
import DOMPurify from 'dompurify'
import insane from "insane"

export const Preview = () => {

  const markup = useSelector(state => state.markup)
  marked.setOptions({
    breaks: true,
  })

  const dirty = marked.parse(markup)

  return (
    <div id={"preview-area"}>
      <div id={"preview-toolbar"}><h3>Preview</h3></div>
      <div id={ "preview"}dangerouslySetInnerHTML={{ __html: dirty }} />
      {/*       <div id={"preview"}>{DOMPurify.sanitize(dirty)}</div> */}
      {/*       <div id={"preview"}><>{sanitize(dirty)}</></div> */}

    </div>
  )
}