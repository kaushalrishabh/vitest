import { useState } from "react";

export const useCounter = ( {initialCounter = 0} = {} ) => {
    const [count, setCount] = useState(initialCounter);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return { count, increment, decrement };
}
