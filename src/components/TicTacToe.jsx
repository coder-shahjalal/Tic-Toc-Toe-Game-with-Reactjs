import { useState } from 'react';
import Board from "./Board";

const PLAYER_X ="X"
const PLAYER_O ="O"


const TicTacToe = () => {
  const [tiles,setTiles] = useState(Array(9).fill(null))
  const [playerTurn,setPlayerTurn] = useState(PLAYER_X)

  const handleTileClick = (index) =>{

    if (tiles[index] !==null){
      return
    }

    const newTiles = [...tiles]
    console.log(newTiles);
    newTiles[index] = playerTurn
    setTiles(newTiles)
    playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_O) : setPlayerTurn(PLAYER_X)

  }


  return (
    <div>
      <h1> Tic Tac Toe </h1>
      <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div>
  );
};

export default TicTacToe;
