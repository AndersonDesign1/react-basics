import './App.css';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Anderson Joseph. Testing a change" />
    </div>
  );
}

export default App;