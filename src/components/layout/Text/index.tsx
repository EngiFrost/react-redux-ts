import React from 'react';

interface ITextProps {
  content: string
  size?: string
}

const Text: React.FC<ITextProps> = (props) => {
  const {content, size} = props

  const style: React.CSSProperties = {
    fontSize: size
  }

  return <p style={style}>{content}</p>
}

export default Text