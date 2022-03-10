import React from 'react';

interface ITextProps {
  content: string;
  size?: string;
  styles?: React.CSSProperties;
}

const Text: React.FC<ITextProps> = (props) => {
  const { content, size, styles } = props;

  const style: React.CSSProperties = {
    fontSize: size,
    ...styles,
  };

  return <p style={style}>{content}</p>;
};

export default Text