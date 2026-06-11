import { useState } from "react";
export const Calculator = () => {
    const [Calculator, event] = useState(0);

    function increment() {
        if (Calculator < 10) {
            event(Calculator + 1);
        }
    }
    function decrement() {
        if (Calculator > 0) {
            event(Calculator - 1);
        }
    }
    function reset() {
        event(Calculator = 0);
    }

    return (
        <div>
            count:{Calculator}
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};