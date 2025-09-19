import { useEffect, useState } from "react";

export default function useModifierKey() {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const onDown = (e) => setPressed(e.ctrlKey || e.metaKey);
    const onUp = () => setPressed(false);

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  return pressed;
}