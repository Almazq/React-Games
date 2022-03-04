import React,{useState} from 'react';
import Board from "./Board";
import {calculateWinner} from "../calculateWinner";
import "./Main.css"

const Main = (props) => {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xItNext,setXItNext] = useState(true);
  const winner = calculateWinner(board);

  const hangeClick = (index)=>{
    const boardCopy = [...board];
    if(winner || boardCopy[index]) return
    boardCopy[index] = xItNext ? "X" : "O";
    setBoard(boardCopy);
    setXItNext(!xItNext)
  }
  return (
    <div>
      <div className="wrapper"><Board squares = {board} hangeClick={hangeClick}/> <p>{winner ? "WIN " + winner : `Walk  ${xItNext ? "x" : "0"}`}</p></div>

    </div>
)
}

export default Main;
