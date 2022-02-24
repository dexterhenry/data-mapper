import React, { useContext } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import useMousePosition from "../../hooks/useMousePosition";
import Xarrow from "react-xarrows";
import { green } from "@mui/material/colors";
const lineColor = green[300],
headColor = green[600]

const DrawerResult = () => {
  const { isDrawing, relations } = useContext(RelationsContext);
  const { clientX, clientY } = useMousePosition(isDrawing);
  return (
    <div>
      <p>{`X: ${clientX} Y:    ${clientY}`}</p>
      <ul>
        {relations.map((relation, index) => (
          <li
            key={`${relation.sourceItem}-${relation.targetItem}-${index} `}
          >{`Source: ${relation.sourceItem} Target: ${relation.targetItem} startX: ${relation.startX} startY: ${relation.startY} endX: ${relation.endX} endY: ${relation.endY}`}</li>
        ))}
      </ul>
      {relations.map((relation, index) => (
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
          zIndex={10}
        />
      ))}
      
    </div>
  );
};

export default DrawerResult;
