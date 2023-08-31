import React, { useState } from "react";
import { AccordionHrItem } from "./AccordionHrItem";
import "./AccordionHr.css";

export const AccordionHr = ({ list }) => {
  const [openId, setId] = useState(0);

  return (
    <ul className="accordion-hr">
      {list &&
        list.length > 0 &&
        list.map((item, id) => (
          <AccordionHrItem
            onClick={() => setId(id)}
            item={item}
            isOpen={id === openId}
            key={id}
            length={list.length}
          />
        ))}
    </ul>
  );
};
