import React, { createContext, useState } from "react";

export const RelationsContext = createContext();

const initialCurrentRelation = {
  sourceItem: null,
  targetItem: null,
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

const getPosition = (ref) => {
  const { left, top } = ref.current.getBoundingClientRect();
  return { x: left, y: top };
};

const RelationsContextProvider = ({ children }) => {
  const [currentRelation, setCurrentRelation] = useState(
    initialCurrentRelation
  );
  const [isDrawing, setIsDrawing] = useState(false);

  const [relations, setRelations] = useState([]);

  const onSourceMouseDown = (e, refSource) => {
    const { x, y } = getPosition(refSource);
    setIsDrawing(true);
    setCurrentRelation({
      ...currentRelation,
      sourceItem: refSource?.current.dataset["item"],
      startX: x,
      startY: y,
    });
  };

  const onSourceMouseUp = () => {
    //Always clean the relation
    setCurrentRelation(initialCurrentRelation);
    setIsDrawing(false);
  };

  const onTargetMouseUp = (e, refSource) => {
    const { x, y } = getPosition(refSource);

    // make sure you have a source
    if (currentRelation.sourceItem) {
      const addCurrentRelation = {
        ...currentRelation,
        targetItem: refSource?.current.dataset["item"],
        endX: x,
        endy: y,
      };

      // add relation
      setRelations([...relations, addCurrentRelation]);
    }
    //Always clean the relation
    setCurrentRelation(initialCurrentRelation);
    setIsDrawing(false);
  };

  const data = {
    isDrawing,
    relations,
    onSourceMouseDown,
    onSourceMouseUp,
    onTargetMouseUp,
  };
  return (
    <RelationsContext.Provider value={data}>
      {children}
    </RelationsContext.Provider>
  );
};

export default RelationsContextProvider;
