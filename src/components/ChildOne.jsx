import { useEffect } from "react";

export const ChildOne = ({ name, age, changeName }) => {
  useEffect(() => {
    console.log("hello Am Child One");

    return () => {
      console.log("Am out Child one");
    };
  }, []);
  return (
    <div>
      {name} - {age}
      <button onClick={() => changeName("Ali")}>change name from child</button>
    </div>
  );
};
