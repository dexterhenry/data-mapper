import { green } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Xarrow from "react-xarrows";
const lineColor = "#77DD77",
  headColor = green[600];

export default function DrawLines({ relations, sourceData, targetData }) {
  const [relationsLines, setRelationsLines] = useState([]);

  useEffect(() => {
    const checkSource = sourceData?.map((source) => source.label);
    const checkTarget = targetData?.map((target) => target.label);
    /* Filter the lines so that they are only displayed 
       when the elements are in the source and the target
       to prevent error in the view so that the lines
       are not lost by not having the element visible */
    const filterRelationsLines = relations.filter((relation) => {
      const hasSource = checkSource.includes(relation.sourceItem),
        hasTarget = checkTarget.includes(relation.targetItem);

      return hasSource && hasTarget;
    });

    /* Only the lines of the relations of the visible elements
     are shown to avoid errors when filtering the elements 
     in the search function in each work area */
    setRelationsLines(filterRelationsLines);
  }, [sourceData, targetData, relations]);

  return relationsLines.map((relation, index) => (
    <Xarrow
      key={`${relation.sourceItem}-${relation.targetItem}-${index}-${index} `}
      start={relation.sourceItemId} //can be react ref
      end={relation.targetItemId} //or an id
      color={lineColor}
      headColor={headColor}
      tailColor={headColor}
      strokeWidth={1.5}
      headSize={8}
      tailSize={4}
      tailShape="circle"
      showTail={true}
    />
  ));
}
