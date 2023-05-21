export const FlexCenterStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const InputTagDefaultStyle: React.CSSProperties = {
  ...FlexCenterStyle,
  display: 'inline-flex',
  padding: '0.15rem',
  paddingLeft: '0.375rem',
  borderRadius: '0.125rem',
  backgroundColor: 'rgba(0,0,0,.1)',
  fontSize: '0.85rem',
};

export const InputTagButtonDefaultStyle: React.CSSProperties = {
  ...FlexCenterStyle,
  backgroundColor: 'transparent',
  border: '0',
  appearance: 'none',
  outline: '0',
  margin: 0,
  padding: '0 0.4rem',
  cursor: 'pointer',
  fontSize: '0.6rem',
  fontWeight: 'bold',
};

export const InputControlDefaultStyle: React.CSSProperties = {
  appearance: 'none',
  outline: '0',
  margin: 0,
  padding: '0',
  border: '0',
  width: '20%',
  height: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  flex: 1,
};

export const InputDefaultStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0,0,0,.2)',
  borderRadius: '0.25rem',
  width: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
};
