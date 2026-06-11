import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const MAX = 10;

    function addCount() {
        if (count < MAX) setCount(count + 1);
    }

    function decreaseCount() {
        if (count > 0) setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <p style={styles.number}>{count}</p>
                <p style={styles.label}>days since the last JavaScript-related accident.</p>
                <div style={styles.btnRow}>
                    <button
                        style={{ ...styles.btn, ...styles.btnPrimary, opacity: count >= MAX ? 0.45 : 1, cursor: count >= MAX ? "not-allowed" : "pointer" }}
                        onClick={addCount}
                    >
                        Increment
                    </button>
                    <button
                        style={{ ...styles.btn, ...(count > 0 ? styles.btnOutlineActive : styles.btnOutline) }}
                        onClick={decreaseCount}
                    >
                        Decrement
                    </button>
                    <button
                        style={{ ...styles.btn, ...(count > 0 ? styles.btnOutlineActive : styles.btnOutline) }}
                        onClick={resetCount}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { minHeight: "100vh", background: "#d0d8e4", display: "flex", alignItems: "center", justifyContent: "center" },
    card: { background: "#fff", borderRadius: "16px", padding: "3rem 2.5rem", maxWidth: "480px", width: "100%", textAlign: "center" },
    number: { fontSize: "96px", fontWeight: "500", margin: "0 0 0.5rem", color: "#111" },
    label: { fontSize: "16px", color: "#666", margin: "0 0 2rem" },
    btnRow: { display: "flex", gap: "12px", justifyContent: "center" },
    btn: { padding: "12px 24px", borderRadius: "8px", fontSize: "15px", fontWeight: "500", cursor: "pointer", border: "none", transition: "opacity 0.15s" },
    btnPrimary: { background: "#1D9E75", color: "#fff", border: "none" },
    btnOutline: { background: "transparent", border: "1.5px solid #ccc", color: "#aaa", cursor: "not-allowed", opacity: 0.45 },
    btnOutlineActive: { background: "transparent", border: "1.5px solid #1D9E75", color: "#1D9E75", cursor: "pointer", opacity: 1 },
};

export default Counter;




















