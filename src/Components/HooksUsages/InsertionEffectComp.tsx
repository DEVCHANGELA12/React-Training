import { useInsertionEffect } from "react";

function InsertionEffectComp() {
  useInsertionEffect(() => {
    // Create a style tag
    const styleTag = document.createElement("style");
    styleTag.textContent = `
      .insertion-effect-demo {
        color: #fff;
        background: #007bff;
        padding: 1rem;
        border-radius: 0.5rem;
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  return (
    <div className="insertion-effect-demo">
      This style was injected using useInsertionEffect!
    </div>
  );
}

export default InsertionEffectComp;
