import { green } from "@mui/material/colors";
import React from "react";
import Xarrow from "react-xarrows";
const lineColor = "#77DD77",
  headColor = green[600];

export default function DrawLines({ relations }) {
  return relations.map((relation, index) => (
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
