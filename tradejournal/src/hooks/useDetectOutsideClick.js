import { useEffect } from "react";

const useDetectOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      console.log("USEEFFECT TArget - ", e.target, ref.current);
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(false);
    };

    document.addEventListener("mousedown", listener);

    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
};

export default useDetectOutsideClick;
