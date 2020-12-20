import React, { useState } from "react";
import AtomMultiInput from "./components/atom-multi-input/atom-multi-input";
import {BeAtom} from "./components/atom/atom";

export default function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <div style={{ padding: 36 }}>
      <div style={{ marginBottom: 36 }}>
        <AtomMultiInput atoms={atoms} setAtoms={setAtoms} />
      </div>

      <div>
        {atoms.map((atom) => (
          <div key={atom.name}>
            <div>{atom.name}</div>
            <div style={{ width: 400, height: 200 }}>
              <BeAtom eSize={atom.config.eSize} velocity={atom.config.velocity} color={atom.config.color} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
