import Monitor from "./components/Monitor/Monitor";
import Controllers from "./components/Controlers/Controlers";
import { Backdrop, Content } from "./App.styled";
import { useState, useEffect } from "react";

const App = () => {
  // lobby, game, score
  const [gameStage, setGameStage] = useState("lobby");
  const [numberOfCounter, setNumberOfCounter] = useState(1);
  const [gameResult, setGameResult] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (gameStage === "game") {
      setTimeout(() => {
        // if (
        //   (numberOfCounter % 3 === 0 || numberOfCounter % 5 === 0) &&
        //   isCorrect === null
        // ) {
        //   setGameResult(numberOfCounter);
        //   setGameStage("score");
        // }
        setNumberOfCounter(numberOfCounter + 1);
        setIsCorrect(null);
      }, 2000);
    }
  }, [numberOfCounter, gameStage]);

  const onStart = () => {
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

  if (gameStage === "score") {
    setTimeout(() => {
      setDisabledButton(false);
    }, 2000);
  }

  const onClickFizzBuzz = () => {
    if (numberOfCounter % 3 === 0 && numberOfCounter % 5 === 0) {
      setIsCorrect("FizzAndBuzz");
    } else {
      setGameResult(numberOfCounter);
      setGameStage("score");
    }
  };

  const onClickFizz = () => {
    if (numberOfCounter % 3 === 0 && numberOfCounter % 5 !== 0) {
      setIsCorrect("Fizz");
    } else {
      setGameResult(numberOfCounter);
      setGameStage("score");
    }
  };

  const onClickBuzz = () => {
    if (numberOfCounter % 5 === 0 && numberOfCounter % 3 !== 0) {
      setIsCorrect("Buzz");
    } else {
      setGameResult(numberOfCounter);
      setGameStage("score");
    }
  };

  return (
    <Backdrop>
      <Content>
        <Monitor
          gameStage={gameStage}
          onStart={onStart}
          onTryAgain={onTryAgain}
          numberOfCounter={numberOfCounter}
          gameResult={gameResult}
          disabledButton={disabledButton}
        />
        <Controllers
          onClickFizzBuzz={onClickFizzBuzz}
          onClickFizz={onClickFizz}
          onClickBuzz={onClickBuzz}
          gameStage={gameStage}
          isCorrect={isCorrect}
        />
      </Content>
    </Backdrop>
  );
};

export default App;
