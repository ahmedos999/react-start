import { useEffect } from "react";

export const ChildTwo = () => {
  useEffect(() => {
    console.log("hello Am Child Two");
  }, []);
  return <div>Child Two</div>;
};
