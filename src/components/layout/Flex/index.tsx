import React from 'react';

export enum GapTypes {
  NONE = 0,
  SMALLEST = 1,
  SMALL = 2,
  MEDIUM = 3,
  LARGE = 4,
  HUGE = 5,
}
interface IFlexProps {
  children: React.ReactNode;
  column?: boolean;
  fill?: boolean;
  gap?: GapTypes;
  styles?: React.CSSProperties;
  wrap?: boolean;
}

const Flex: React.FC<IFlexProps> = (props) => {
  const { children, column = false, fill = false, gap = GapTypes.NONE, styles, wrap = false } = props;

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: `${Math.pow(4, gap)}px`,
    height: fill ? '100%' : 'fit-content',
    width: fill ? '100%' : 'fit-content',
    ...styles,
  };

  return <div style={style}>{children}</div>;
};

export default Flex;
