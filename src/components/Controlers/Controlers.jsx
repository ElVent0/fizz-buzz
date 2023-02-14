import {
  Container,
  FizzAndBuzz,
  ButtonFizzAndBuzz,
  ButtonFizzBuzz,
} from "./Controlers.styled";

const Controllers = ({ onClickFizzBuzz, onClickFizz, onClickBuzz }) => {
  return (
    <Container>
      <ButtonFizzAndBuzz onClick={onClickFizzBuzz}>
        FIZZ &amp; BUZZ
      </ButtonFizzAndBuzz>
      <FizzAndBuzz>
        <ButtonFizzBuzz onClick={onClickFizz}>FIZZ</ButtonFizzBuzz>
        <ButtonFizzBuzz onClick={onClickBuzz}>BUZZ</ButtonFizzBuzz>
      </FizzAndBuzz>
    </Container>
  );
};

export default Controllers;
