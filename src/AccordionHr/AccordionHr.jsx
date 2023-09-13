import React, { useState } from "react";
import { AccordionHrItem } from "./AccordionHrItem";
import "./AccordionHr.css";

export const AccordionHr = ({ list }) => {
  const [openId, setId] = useState(0);

  return (
    <ul className="accordion-hr">
      {list.map((item, id) => {
        return (
          <AccordionHrItem
            onClick={() => setId(id)}
            item={item}
            isOpen={id === openId}
            length={list.length}
            key={id}
          />
        );
      })}
    </ul>
  );
};
