// Example 1: Click Event

// export default function Events() {
//     function handleClick() {
//         alert('Button clicked!');
//     }
//   return (
//     <div>
//         <h1>Events Page</h1>
//         <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// // Example 2: Using Event Object

// export default function Events() {
//         function handleClick(e) {
//             console.log("Event:", e);
//         }

//         return <button onClick={handleClick}>Show Event</button>
// }



// // Example 3: Passing Data in an Event

// export default function Events() {
//     function sayHello(name) {
//         alert(`Hello, ${name}!`);
//     }

//     return <button onClick={() => sayHello('Anderson')}>Greet Me</button>
// }

// Example 4: Form Submit Event

export default function Events() {
    function handleSubmit(e) {
        e.preventDefault(); // Stop page reload
        alert('Thank you for submitting the form!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" />
            <button type="submit">Submit</button>
        </form>
    );
}



// // React Events vs Normal HTML Events
// // normal html
// onclick="handleClick()"
// // react
// onClick={handleClick}

// // normal html
// lowercase events name
// // react
// // camelCase events name

// // Normal HTML
// string value
// //react
// function value

// // Normal HTML
// Handled directly in HTML
// // react
// Handled in JavaScript code