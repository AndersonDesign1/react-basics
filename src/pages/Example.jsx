import { useState } from "react";
import '../App.css';

export default function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

// Functional Component Example
// export default Example;


// import "./Components.css";

// export default function Components() {
//     const user = {
//         name: "Anderson Joseph",
//     };

//     return (
//        <div>Hello, {user.name}</div>
//    )
// }

