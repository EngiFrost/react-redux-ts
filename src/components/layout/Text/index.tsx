import React from 'react';

interface ITextProps {
  align?: 'left' | 'center' | 'right';
  content: string;
  fluid?: boolean;
  size?: string;
  styles?: React.CSSProperties;
}

const Text: React.FC<ITextProps> = (props) => {
  const { align = 'left', content, fluid = false, size, styles } = props;

  const style: React.CSSProperties = {
    fontSize: size,
    textAlign: align,
    width: fluid ? '100%' : 'fit-content',
    ...styles,
  };

  return <p style={style}>{content}</p>;
};

export default Text