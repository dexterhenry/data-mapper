import React, { useContext } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import useMousePosition from "../../hooks/useMousePosition";

const DrawerResult = () => {
  const { isDrawing, relations } = useContext(RelationsContext);
  const { clientX, clientY } = useMousePosition(isDrawing);
  return (
    <div>
      <p>{`X: ${clientX} Y:    ${clientY}`}</p>
      <ul>
        {relations.map((relation) => (
          <li>{`Source: ${relation.sourceItem} Target: ${relation.targetItem}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerResult;
