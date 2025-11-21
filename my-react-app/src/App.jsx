import './App.css';

function Square() {
  return (
    <>
    <div className="board-row">
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
     </div>
     <div className="board-row">
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
     </div>
    <div className="board-row">
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
     </div>
    </>
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