import {
  Container,
  StartButton,
  Counter,
  CounterContent,
  TimerContainer,
  TimerContant,
  ScoreContent,
  YourScoreParagraph,
  ScoreParagraph,
  TryButton,
} from "./Monitor.styled";
import CountUp from "react-countup";

const Monitor = ({
  gameStage,
  onStartGame,
  onTryAgain,
  numberOfCounter,
  gameResult,
  disabledButton,
}) => {
  return (
    <Container>
      {gameStage === "lobby" && (
        <StartButton onClick={onStartGame}>Start</StartButton>
      )}
      {gameStage === "game" && (
        <>
          <Counter>
            <CounterContent>{numberOfCounter}</CounterContent>
          </Counter>
          <TimerContainer>
            <TimerContant key={numberOfCounter}></TimerContant>
          </TimerContainer>
        </>
      )}
      {gameStage === "score" && (
        <ScoreContent>
          <YourScoreParagraph>Your score:</YourScoreParagraph>
          <ScoreParagraph>
            <CountUp start={1} end={gameResult} duration={2} />
          </ScoreParagraph>
          <TryButton onClick={onTryAgain} disabled={disabledButton}>
            Try again
          </TryButton>
        </ScoreContent>
      )}
    </Container>
  );
};

export default Monitor;
