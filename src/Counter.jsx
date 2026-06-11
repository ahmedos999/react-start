import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function addCount() {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={addCount}>Add</button>

            <button onClick={decreaseCount}>Decrease</button>

            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Counter;