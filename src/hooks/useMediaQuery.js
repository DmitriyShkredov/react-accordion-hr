import { useState, useEffect } from "react";

const mq = (query) => {
  return window.matchMedia(query).matches;
};

export const useMediaQuery = (query) => {
  const [isMatches, setMatches] = useState(mq(query));

  const update = () => setMatches(mq(query));

  useEffect(() => {
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return isMatches;
};
