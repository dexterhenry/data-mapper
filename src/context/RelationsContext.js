import React, { createContext, useState } from "react";
import { SOURCE_TYPE } from "../components/Mapping";

export const RelationsContext = createContext();

const initialCurrentRelation = {
  sourceItem: null,
  sourceItemType: null,
  targetItem: null,
  targetItemType: null,
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

  const [relationFault, setRelationFault] = useState(false);

  const onSourceMouseDown = (e, refSource) => {
    const { x, y } = getPosition(refSource);
    setIsDrawing(true);
    setCurrentRelation({
      ...currentRelation,
      sourceItem: refSource?.current.dataset["item"],
      sourceItemType: refSource?.current.dataset["sourceType"],
      sourceItemRef: refSource,
      sourceItemId: refSource?.current.id,
      startX: x,
      startY: y,
    });
  };

  const onSourceMouseUp = () => {
    //Always clean the relation
    setCurrentRelation(initialCurrentRelation);
    setIsDrawing(false);
  };

  const onTargetMouseUp = (e, refSource, itemIndex, handleListItemClick) => {
    const { x, y } = getPosition(refSource);

    // make sure you have a source
    if (currentRelation.sourceItem) {
      const addCurrentRelation = {
        ...currentRelation,
        targetItem: refSource?.current.dataset["item"],
        targetItemType: refSource?.current.dataset["targetType"],
        targetItemRef: refSource,
        targetItemId: refSource?.current.id,
        endX: x,
        endY: y,
      };

      const existRelation =
        relations.filter((rel) => {
          return (
            rel.targetItem === addCurrentRelation.targetItem &&
            rel.sourceItem === addCurrentRelation.sourceItem
          );
        }).length < 1;

      const { targetItemType, sourceItemType } = addCurrentRelation;

      const isAvailable = targetItemType === sourceItemType;
      // add relation
      existRelation &&
        isAvailable &&
        setRelations([...relations, addCurrentRelation]);
      // active target item
      isAvailable && handleListItemClick(itemIndex);
      //activate relation fault
      !isAvailable && setRelationFault(`Different data types, source type: ${sourceItemType.toUpperCase()} and target type ${targetItemType.toUpperCase()}`);
    }
    //Always clean the relation
    setCurrentRelation(initialCurrentRelation);
    setIsDrawing(false);
  };

  const getOccurrence = (item, type) => {
    let ocurrence = { source: 0, target: 0 };
    const sourceOcurrence = relations.filter(
      (el) => el.sourceItem === item
    ).length;
    const targetOcurrence = relations.filter(
      (el) => el.targetItem === item
    ).length;
    ocurrence =
      type === SOURCE_TYPE
        ? (ocurrence = {
            source: sourceOcurrence > 0 ? 1 : 0,
            target: sourceOcurrence,
          })
        : (ocurrence = {
            source: targetOcurrence > 0 ? 1 : 0,
            target: targetOcurrence,
          });
    return `${ocurrence.source}:${ocurrence.target}`;
  };

  const cleanRelations = () => setRelations([])

  const data = {
    isDrawing,
    relationFault,
    relations,
    setRelationFault,
    onSourceMouseDown,
    onSourceMouseUp,
    onTargetMouseUp,
    getOccurrence,
    cleanRelations
  };
  return (
    <RelationsContext.Provider value={data}>
      {children}
    </RelationsContext.Provider>
  );
};

export default RelationsContextProvider;
