export const getElementPosition = ( elRef ) => {
  const { top, left } = elRef.current.getBoundingClientRect();
  return {
    x: left,
    y: top,
  };
};

export default getElementPosition;
