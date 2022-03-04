import React from 'react';
import Square from "./Square";
import "./Board.css"

const Board =  React.memo(({squares, hangeClick}) => {
  return (
    <div className="board">
      {squares.map((square , i) =><Square key={i} value={square} click={()=>{hangeClick(i)}}/>)}
    </div>

  )
});

export default Board;
