import './App.css';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Anderson Joseph" />
    </div>
  );
}

export default App;