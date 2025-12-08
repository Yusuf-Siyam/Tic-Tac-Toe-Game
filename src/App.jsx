import { useState } from "react";

function Square({ value, onSquareClick }) {
  //const [value, setValue] = useState(null);

  //function handleClick() {
  //console.log("Hello button");
  // setValue("X");
  //}
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handClick() {
    squares[0] = "X";
    setSquares([...squares]);
  }
  return (
    <>
      {" "}
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
