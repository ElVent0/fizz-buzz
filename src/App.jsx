import Monitor from "./components/Monitor/Monitor";
import Controllers from "./components/Controlers/Controlers";
import { Backdrop, Content } from "./App.styled";
import { useState, useEffect } from "react";

const App = () => {
  const [gameStage, setGameStage] = useState("lobby");
  const [numberOfCounter, setNumberOfCounter] = useState(1);
  const [gameResult, setGameResult] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const onStartGame = () => {
    setGameResult(numberOfCounter);
    setGameStage("game");
  };

  const onTryAgain = () => {
    setNumberOfCounter(1);
    setGameResult(numberOfCounter);
    setGameStage("game");
    setIsCorrect(null);
    setDisabledButton(true);
  };

  const onFinishGame = () => {
    setGameResult(numberOfCounter);
    setGameStage("score");
  };

  if (gameStage === "score") {
    setTimeout(() => {
      setDisabledButton(false);
    }, 4000);
  }

  useEffect(() => {
    if (gameStage === "game") {
      setTimeout(() => {
        setNumberOfCounter(numberOfCounter + 1);
        setIsCorrect(null);
      }, 4000);
    }
  }, [numberOfCounter, gameStage]);

  const onClickFizzBuzz = () => {
    if (numberOfCounter % 3 === 0 && numberOfCounter % 5 === 0) {
      setIsCorrect("FizzAndBuzz");
    } else {
      onFinishGame();
    }
  };

  const onClickFizz = () => {
    if (numberOfCounter % 3 === 0 && numberOfCounter % 5 !== 0) {
      setIsCorrect("Fizz");
    } else {
      onFinishGame();
    }
  };

  const onClickBuzz = () => {
    if (numberOfCounter % 5 === 0 && numberOfCounter % 3 !== 0) {
      setIsCorrect("Buzz");
    } else {
      onFinishGame();
    }
  };

  const onClickPass = () => {
    if (numberOfCounter % 5 !== 0 && numberOfCounter % 3 !== 0) {
      setIsCorrect("Pass");
    } else {
      onFinishGame();
    }
  };

  return (
    <Backdrop>
      <Content>
        <Monitor
          gameStage={gameStage}
          onStartGame={onStartGame}
          onTryAgain={onTryAgain}
          numberOfCounter={numberOfCounter}
          gameResult={gameResult}
          disabledButton={disabledButton}
        />
        <Controllers
          onClickFizzBuzz={onClickFizzBuzz}
          onClickFizz={onClickFizz}
          onClickBuzz={onClickBuzz}
          onClickPass={onClickPass}
          gameStage={gameStage}
          isCorrect={isCorrect}
        />
      </Content>
    </Backdrop>
  );
};

export default App;
