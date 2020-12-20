import React, { useEffect, useState } from "react";

export default function AtomInput({atom, index, atoms, setAtoms }) {
  const [localConfig, setLocalConfig] = useState(atom.config);

  useEffect(() => {
    setAtoms([
      ...atoms
        .map((x, i) => (i !== index ? x : { ...x, config: localConfig })),
    ]);
  }, [localConfig]);

  return (
    <form className="pure-form">
      <fieldset>
        <legend>Config of {atom.name}</legend>
        <label>
          Electron size
          <input
            defaultValue={3}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, eSize: val }));
            }}
            type="number"
          />
        </label>{" "}
        <label>
          Electron velocity
          <input
            defaultValue={30}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, velocity: val }));
            }}
            type="number"
          />
        </label>{" "}
        <label>
          Electron color
          <input
            defaultValue={"#f47b20"}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, color: val }));
            }}
            type="color"
          />
        </label>
            <button type="button" onClick={
              () => setAtoms(atoms.filter((_,i) => i !== index))
            }>Remove</button>
      </fieldset>
    </form>
  );
}
