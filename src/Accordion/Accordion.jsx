import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import "./Accordion.css";

export const Accordion = ({ list }) => {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {list.map((item, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            item={item}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};
