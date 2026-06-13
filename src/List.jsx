import { ListItem } from "./components/ListItem";

export const List = () => {
  const usersData = [
    { name: "Ahmed", age: 10 },
    { name: "Ali", age: 12 },
    { name: "khaild", age: 16 },
  ];
  return (
    <>
      {usersData.map((user, index) => {
        return <ListItem key={index} name={user.name} age={user.age} />;
      })}
    </>
  );
};
