import './App.css';

function Square() {
  return (
    <button className="square">X</button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Square />
    </div>
  );
}