const todoCardStyles: { [key: string]: React.CSSProperties } = {
  card: {
    minHeight: '100px',
    minWidth: '150px',
    maxWidth: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDataWrapper: {
    padding: '0 16px',
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  removeIcon: {
    fontSize: '16px',
  },
  cardTitle: {
    lineHeight: '22px',
    fontSize: '22px',
    marginBottom: 0,
  },
  cardContent: {
    lineHeight: '18px',
    fontSize: '18px',
  },
};

export default todoCardStyles;
