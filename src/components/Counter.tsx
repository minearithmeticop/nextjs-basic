'use client'; // Client Component marker

import { useState } from 'react';

export default function Counter() {
    // State เก็บค่า counter, เริ่มต้นที่ 0
    const [count, setCount] = useState(0);

    // เพิ่มค่า counter
    const increment = () => {
        setCount(count + 1);
    };

    // ลดค่า counter
    const decrement = () => {
        setCount(count > 0 ? count - 1 : 0);
    };

    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Counter Example (Local State)</h2>
            <p className="text-3xl font-bold text-center my-4">{count}</p>
            <div className="flex gap-4 justify-center">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    +
                </button>
            </div>
        </div>
    );
}