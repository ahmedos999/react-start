
import UserCard from "./UserCard";
import Weather from "./Weather";
import Esraa from "./assets/Esraa.jpg";
import ahmed from "./assets/ahmed.jpg";
import bebo from "./assets/bebo.jpg";
import mram from "./assets/mram.jpg";
function UsersDashboard() {
    const users = [
        { id: 1, name: "Esraa", age: 22, isOnline: true, image: Esraa },
        { id: 2, name: "Ahmed", age: 27, isOnline: false, image: ahmed },
        { id: 3, name: "bebo", age: 5, isOnline: true, image: bebo },
        { id: 4, name: "Mram", age: 21, isOnline: false, image: mram },
    ];
    return (
        <> <h1 className="title">Users</h1>
            <div className="users-container">
                {users.map((user) => (
                    < UserCard
                        key={user.id}
                        name={user.name}
                        age={user.age}
                        isOnline={user.isOnline}
                        image={user.image}
                    />
                ))}
            </div>
            <Weather temperature={35} />
        </>
    );
}
export default UsersDashboard;