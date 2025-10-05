// Example 1: increase age and change name

import { useState } from "react";

export default function State() {
    const [name, setName] = useState("Anderson");
    const [age, setAge] = useState(24);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <button onClick={() => setName(name === "Anderson" ? "Joseph" : "Anderson")}>Change Name</button>
        </div>
    );
}




// Example 2: toggle button

// import { useState } from "react";

// export default function State() {
//     const [isOn, setIsOn] = useState(false);

//     return (
//         <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
//     );
// }



// Example 3: Input field

// import { useState } from "react";

// export default function State() {
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//             <p>You Typed: {text}</p>
//         </div>
//     );
// }

// Common Mistakes to avoid:

// count++; // This is wrong. won't rerender
// // Correct way: setCount(count + 1);

// setUser(user.age = 25); // This is wrong. always copy the old state
// // // Correct way: setUser({...user, age: 25});

// console.log(count)
// after setCount(count + 1); // This is wrong. won't show the updated value immediately
// // // Correct way: use useEffect to watch for changes in count and log it there