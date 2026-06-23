import Hello from "./Hello";
import Card from "./First";
import StudentProfile from "./Second";
import Counter from "./Counter";
import { Parent } from "./Parent";
import { List } from "./List";
import UserCard from './UserCard';
import Weather from './Weather';


function App() {
  //  ORIGINAL COMPONENTS 
  // NEW: USER ARRAY FOR USERCARD COMPONENT 
  // Each user object has:
  // - name (string)
  // - age (number)
  // - status (boolean: true = online, false = offline)

  const users = [
    { name: "Ahmed Osman", age: 28, status: true },
    { name: "Esraa Moh", age: 32, status: false },
    { name: "Tagwa Osman", age: 25, status: true },
    { name: "Wala Alhadi", age: 35, status: true },
    { name: "Laila Moh", age: 30, status: false },
    { name: "Lina Moh", age: 24, status: false }
  ];

  // NEW: TEMPERATURES FOR WEATHER COMPONENT 
  const temperatures = [15, 30, 45];

  return (
    <div>
      <Card />
      <StudentProfile />
      <Counter />

      { /* NEW: USER DIRECTORY SECTION */}
      <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>👥 User Directory</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
          {users.map((user) => (
            <UserCard
              key={user.name}
              name={user.name}
              age={user.age}
              status={user.status}
            />
          ))}
        </div>
      </section>

      {/*  NEW: WEATHER SECTION  */}
      <section style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>🌡️ Weather Examples</h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          عرض شروط جوية مختلفة بناءً على درجة الحرارة - Different weather conditions based on temperature
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
          {temperatures.map((temp, index) => (
            <Weather key={index} temperature={temp} />
          ))}
        </div>
      </section>
    </div>
  );

  <div>
    {/* <Card />
      <StudentProfile />
      <Counter /> */}
    {/* <Parent /> */}
    <List />

    {/* write your compoents here */}
  </div>

}

export default App;
