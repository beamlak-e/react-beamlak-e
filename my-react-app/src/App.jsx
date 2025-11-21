import './App.css';
import {useState} from 'react'; 

function Square({value}){
  const [value, setValue] = useState(null); 
  function handleClick(){
    console.log("clicked!!");
  }
  return(
  <button
   className="square"
   onClick={handleClick}
   >
    {value}
    </button>
  );
}
function Board() {
  return (
    <>
    <div className="board-row">
    <Square  /> 
    <Square /> 
    <Square  /> 
     </div>
     <div className="board-row">
    <Square /> 
    <Square /> 
    <Square  /> 
     </div>
    <div className="board-row">
    <Square /> 
    <Square /> 
   <Square  /> 
     </div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}