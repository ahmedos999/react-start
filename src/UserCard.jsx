function UserCard(props) {
    return (
        <div className="user-card">
            <div className={props.isOnline ? "online" : "offline"}>

            </div>
            <img src={props.image} alt={props.name} />
            <h3> {props.name}</h3>
            <p> Age: {props.age}</p>
            <button> Send </button>
        </div>
    );
}
export default UserCard;