import React from 'react';

interface IFlexProps {
  children: React.ReactNode;
  column?: boolean;
  styles?: React.CSSProperties;
  wrap?: boolean;
}

const Flex: React.FC<IFlexProps> = (props) => {
  const { children, column = false, styles = {}, wrap = false } = props;

  const style: React.CSSProperties = {
    ...styles,
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
  };

  return <div style={style}>{children}</div>;
};

export default Flex;
