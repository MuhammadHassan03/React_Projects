import gameStyle from './css/GamePage.module.css';
import oneDice from './assets/one.svg';
import twoDice from './assets/two.svg';
import threeDice from './assets/three.svg';
import fourDice from './assets/four.svg';
import fiveDice from './assets/five.svg';
import sixDice from './assets/six.svg';
import { useState } from 'react';
import { Rules } from './Rules';
function GamePage() {
    var randomValue = 0;
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [DiceClicked, isDiceClicked] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [dice, updateDice] = useState(oneDice);

    const calcualteScore = () => {
        if (selectedNumber == randomValue && selectedNumber != null) {
            setScore(() => { return score + randomValue });
            setSelectedNumber(null);
        }
        else if (selectedNumber != randomValue && selectedNumber != null) {
            setScore(() => { return score - randomValue });
            setSelectedNumber(null);
        }
    }
    const setDice = () => {
        if (buttonClicked == false) {
            document.getElementById("p1").style.display = "flex";
        }
        else {
            document.getElementById("p1").style.display = "none";
            let random = Math.floor(Math.random() * 7);
            randomValue = random;
            if (random == 1 && !DiceClicked) {
                updateDice(oneDice);
                console.log(random);;
                calcualteScore();
            }
            else if (random == 2 && !DiceClicked) {
                updateDice(twoDice);
                console.log(random);
                calcualteScore();
            }
            else if (random == 3 && !DiceClicked) {
                updateDice(threeDice);
                console.log(random);
                calcualteScore();
            }
            else if (random == 4 && !DiceClicked) {
                updateDice(fourDice);
                console.log(random);
                calcualteScore();
            }
            else if (random == 5 && !DiceClicked) {
                updateDice(fiveDice);
                console.log(random);
                calcualteScore();
            }
            else if (random == 6 && !DiceClicked) {
                updateDice(sixDice);
                console.log(random);
                calcualteScore();
            }
        }
    }
    return (
        <>
            <div className={gameStyle.Header}>
                <div className={gameStyle.leftDiv}>
                    <p className={gameStyle.leftDivP1}>{score}</p>
                    <p className={gameStyle.leftDivP2}>Total Score</p>
                </div>
                <div className={gameStyle.rightDiv}>
                    <p id="p1" className={gameStyle.p1}>You have not selected any number</p>
                    <div>
                        <li><button onClick={() => { setSelectedNumber(1); setButtonClicked(true) }}>1</button></li>
                        <li><button onClick={() => { setSelectedNumber(2); setButtonClicked(true) }}>2</button></li>
                        <li><button onClick={() => { setSelectedNumber(3); setButtonClicked(true) }}>3</button></li>
                        <li><button onClick={() => { setSelectedNumber(4); setButtonClicked(true) }}>4</button></li>
                        <li><button onClick={() => { setSelectedNumber(5); setButtonClicked(true) }}>5</button></li>
                        <li><button onClick={() => { setSelectedNumber(6); setButtonClicked(true) }}>6</button></li>
                    </div>
                    <div className={gameStyle.p2Div}>
                        <p >Select Number</p>
                    </div>
                </div>
            </div>
            <div className={gameStyle.gameBody}>
                <img onClick={setDice} src={dice} alt="" />
                <p>Click on Dice to roll</p>
                <button onClick={() => { setScore(0); isDiceClicked(false); }} id={gameStyle.btn1}>Reset Score</button>
                <button onClick={() => { <Rules></Rules> }} id={gameStyle.btn2}>Show Rules</button>
            </div>
        </>
    );
}
export default GamePage;