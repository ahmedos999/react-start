import { useState } from "react";
export const Calculator = () => {
    const [count, setCount] = useState(0);
    function increment() {
        if (count < 10) {
            setCount(count + 1);
        }
    }
    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function reset() {
        setCount(0);
    }
    return (
        <div>
            count:{count}
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Calculator