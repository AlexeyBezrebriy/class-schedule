import { useEffect, useReducer } from "react";
import { FORCE_UPDATE_TIME } from "./constants";

export const useIntervalUpdate = () => {
  const [, forceRerender] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceRerender();
    }, FORCE_UPDATE_TIME);
  
    return () => clearInterval(interval);
  }, []);
}