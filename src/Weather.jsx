function Weather(props) {
    let message;
    if (props.temperature > 30) {
        message = "It is hot";
    }
    if (props.temperature > 20) {
        message = "It is moderate";
    }
    else {
        message = " It is cold"
    }
    return (
        <div className="weather">
            <h2> {props.temperature} C</h2>
            <p>{message}</p>
        </div>
    );
}
export default Weather;