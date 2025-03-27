import { useState } from "react";

export default function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: '10px', cursor: 'pointer' }}>
          {isOpen ? '➖ Collapse' : '➕ Expand'} {title}
        </button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }