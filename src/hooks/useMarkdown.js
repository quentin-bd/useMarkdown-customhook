import { useState } from 'react'
import { marked } from 'marked'

const useMarkdown = (val) => {


  const [markInput, setMarkInput] = useState('')

  const getMarkdownText = (txt) => {
    const rawMarkup = marked(txt, { sanitize: true });
    return { __html: rawMarkup };
  };

  const handleMarkdown = (input) => {
    setMarkInput(input.target.value)
  }

  return {
    bind: { onChange: handleMarkdown },
    markInput,
    markOutput: getMarkdownText
  }
}

export default useMarkdown