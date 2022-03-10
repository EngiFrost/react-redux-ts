import React from 'react';

export enum GapTypes {
  'gap.none' = 0,
  'gap.smallest' = 1,
  'gap.small' = 2,
  'gap.medium' = 3,
  'gap.large' = 4,
  'gap.huge' = 5,
}
interface IFlexProps {
  children: React.ReactNode;
  column?: boolean;
  fill?: boolean;
  gap?: keyof typeof GapTypes;
  styles?: React.CSSProperties;
  wrap?: boolean;
}

const Flex: React.FC<IFlexProps> = (props) => {
  const { children, column = false, fill = false, gap = 'gap.none', styles, wrap = false } = props;

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: `${+GapTypes[gap] * 8}px`,
    height: fill ? '100%' : 'fit-content',
    width: fill ? '100%' : 'fit-content',
    ...styles,
  };

  return <div style={style}>{children}</div>;
};

export default Flex;
