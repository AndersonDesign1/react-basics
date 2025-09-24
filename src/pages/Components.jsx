import "./Components.css";

export default function Components() {
    const user = {
        name: "Anderson Joseph",
    };

    return (
        <div>Hello, {user.name}</div>
    )
}

// Class component example. Do not write this in your project. It's outdated.

// class ComponentsClass extends React.Component {
//     render() {
//         const userName = "Anderson Joseph";
//         return (
//             <div>Hello, {userName}</div>
//         )
//     }
// }