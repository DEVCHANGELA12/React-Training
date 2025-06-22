import { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutEffectComp() {
  const [width, setWidth] = useState(0);

  // This runs AFTER paint
  useEffect(() => {
    console.log("useEffect: DOM has been painted.");
  }, []);

  // This runs BEFORE paint
  useLayoutEffect(() => {
    const boxWidth = 100;
    setWidth(boxWidth);
    console.log("useLayoutEffect: Box width is", boxWidth);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI" }}>
      <h2>useLayoutEffect Example</h2>
     
      <p>Measured box width: {width.toFixed(2)} px</p>
    </div>
  );
}
