import React from 'react';

interface ITextProps {
  content: string;
  fluid?: boolean;
  size?: string;
  styles?: React.CSSProperties;
}

const Text: React.FC<ITextProps> = (props) => {
  const { content, fluid = false, size, styles } = props;

  const style: React.CSSProperties = {
    fontSize: size,
    width: fluid ? '100%' : 'fit-content',
    ...styles,
  };

  return <p style={style}>{content}</p>;
};

export default Text