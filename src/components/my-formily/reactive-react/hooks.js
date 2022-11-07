import { useEffect, useReducer, useRef } from "react";
import { Tracker } from "@/which";

const useObserver = (view) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 1);
  console.log("view:", view);
  const trackerRef = useRef();

  if (!trackerRef.current) {
    trackerRef.current = new Tracker(() => {
      forceUpdate();
    });
  }

  useEffect(() => {
    return () => {
      if (trackerRef.current) {
        trackerRef.current.dispose();
        trackerRef.current = null;
      }
    };
  }, []);

  return trackerRef.current.track(view);
};

export default useObserver;
