import React from 'react';

type fontWeightType = 'normal' | 'bold' | '100' | '600';

interface ITextProps {
  align?: 'left' | 'center' | 'right';
  content: string;
  fluid?: boolean;
  fontWeight?: fontWeightType;
  size?: string;
  styles?: React.CSSProperties;
}

const Text: React.FC<ITextProps> = (props) => {
  const { align = 'left', content, fluid, fontWeight = 'normal', size, styles } = props;

  const style: React.CSSProperties = {
    fontSize: size,
    fontWeight: fontWeight,
    textAlign: align,
    width: fluid ? '100%' : 'fit-content',
    whiteSpace: 'initial',
    ...styles,
  };

  return <p style={style}>{content}</p>;
};

export default Text