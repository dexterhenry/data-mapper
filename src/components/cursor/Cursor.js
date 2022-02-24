import { useContext, useEffect } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import useMousePosition from "../../hooks/useMousePosition";

export const Cursor = () => {
  const { isDrawing } = useContext(RelationsContext);
  const { clientX, clientY } = useMousePosition(isDrawing);
    
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        // transform: `translate(-50%, -50%) scale(${isHover ? 2.5 : 1})`,
        stroke: isDrawing ? "black" : "none",
        strokeWidth: 1,
        fill: isDrawing ? "rgba(255,255,255,.5)" : "none",
        transition: "transform .2s ease-in-out",
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};
