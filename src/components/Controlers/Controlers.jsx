import {
  Container,
  FizzAndBuzz,
  ButtonFizzAndBuzz,
  ButtonFizzBuzz,
} from "./Controlers.styled";

const Controllers = ({
  onClickFizzBuzz,
  onClickFizz,
  onClickBuzz,
  gameStage,
  isCorrect,
}) => {
  const isDisabled = () => {
    if (["lobby", "score"].includes(gameStage)) {
      const disabled = true;
      return disabled;
    }
  };

  return (
    <Container>
      <ButtonFizzAndBuzz
        disabled={isDisabled()}
        onClick={onClickFizzBuzz}
        isCorrect={isCorrect}
      >
        FIZZ &amp; BUZZ
      </ButtonFizzAndBuzz>
      <FizzAndBuzz>
        <ButtonFizzBuzz
          disabled={isDisabled()}
          onClick={onClickFizz}
          isCorrect={isCorrect}
        >
          FIZZ
        </ButtonFizzBuzz>
        <ButtonFizzBuzz
          disabled={isDisabled()}
          onClick={onClickBuzz}
          isCorrect={isCorrect}
        >
          BUZZ
        </ButtonFizzBuzz>
      </FizzAndBuzz>
    </Container>
  );
};

export default Controllers;
