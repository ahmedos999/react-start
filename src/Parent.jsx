import { useState } from "react";
import { ChildOne } from "./components/ChildOne";
import { ChildTwo } from "./components/ChildTwo";

export const Parent = () => {
  const flag = true;
  const [flagState, setFlagState] = useState(flag);
  const [name, setName] = useState("Ahmeds");
  return (
    <>
      {flagState ? (
        <ChildOne name={name} age={10} changeName={setName} />
      ) : (
        <ChildTwo />
      )}
      <button onClick={() => setFlagState(!flagState)}> toggle</button>
      <button onClick={() => setName("Hamada")}> Change Name</button>
      <div>{name}</div>
    </>
  );
};
