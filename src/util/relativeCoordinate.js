export const relativeCoordinatesForEvent = (mouseEvent, elRef) => {
  if (!elRef.current) {
    return;
  }
  const boundingRect = elRef.current.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - boundingRect.left,
    y: mouseEvent.clientY - boundingRect.top,
  };
};

export default relativeCoordinatesForEvent;
