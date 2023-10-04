/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable global-require */
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import draftToHtml from 'draftjs-to-html'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// @ts-ignore
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
})

let htmlToDraft: any = null
if (typeof window === 'object') {
  htmlToDraft = require('html-to-draftjs').default
}

const RichTextEditor = ({
  handleChange,
  editorState,
  disable,
}: {
  handleChange: (value: string) => void
  editorState: string
  disable?: boolean
}) => {
  const [mounted, setMounted] = useState(false)
  const getHtmlFromState = (state: EditorState) => {
    const raw = convertToRaw(state.getCurrentContent())
    const markup = draftToHtml(raw)
    return markup
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const getStateFromHtml = (html: string) => {
    const blocksFromHtml = htmlToDraft(html)
    const { contentBlocks, entityMap } = blocksFromHtml
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)
    const editorState = EditorState.createWithContent(contentState)
    return editorState
  }

  const [stateEdit, setStateEdit] = useState(EditorState.createEmpty())

  useEffect(() => {
    if (mounted && !disable && getHtmlFromState(stateEdit) !== editorState) {
      handleChange(getHtmlFromState(stateEdit))
    }
  }, [stateEdit])

  useEffect(() => {
    if (mounted && editorState !== getHtmlFromState(stateEdit)) {
      setStateEdit(getStateFromHtml(editorState))
    }
  }, [editorState, mounted])

  return (
    <>
      <Editor
        editorState={stateEdit}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(state) => {
          if (!disable) setStateEdit(state)
        }}
      />
    </>
  )
}

export default RichTextEditor
