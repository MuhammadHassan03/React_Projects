import rulesStyle from './css/Rules.module.css';
export const Rules = () => {
    return(
        <>
            <div className={rulesStyle.mainDiv}>
                <h2>How to Play Dice Game</h2>
                <p>Select any number<br/>Click on dice image<br/>after click on  dice  if selected number is equal to dice number you will get same point as dice <br/>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </>
    );
}