import React , {useContext } from 'react';
import {AppContext} from "../App";

function GameOver() {
    const { gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "Correct guess! Awesome job!" : "Sorry, you failed. Better luck next time!"}
        </h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts </h3>)}
    </div>
  )
}

export default GameOver