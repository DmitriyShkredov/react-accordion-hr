export const AccordionHrItem = ({ item, onClick, isOpen, length }) => {
  return (
    <li
      className="accordion-hr-item"
      style={{ width: isOpen ? `calc(100vw - ${50 * (length - 1)}px)` : "" }}
    >
      <button
        className={`accordion-hr-header ${isOpen ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <span>{item.label}</span>
      </button>
      <div
        className="accordion-hr-body"
        style={{ width: `calc(100vw - ${50 * length}px)` }}
      >
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </li>
  );
};
