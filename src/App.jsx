import Monitor from "./components/Monitor/Monitor";
import Controllers from "./components/Controlers/Controlers";
import { Backdrop, Content } from "./App.styled";

const App = () => {
  const onClickFizzBuzz = () => {
    console.log("FiizBuzz");
  };
  const onClickFizz = () => {
    console.log("Fiiz");
  };
  const onClickBuzz = () => {
    console.log("Buzz");
  };
  return (
    <Backdrop>
      <Content>
        <Monitor />
        <Controllers
          onClickFizzBuzz={onClickFizzBuzz}
          onClickFizz={onClickFizz}
          onClickBuzz={onClickBuzz}
        />
      </Content>
    </Backdrop>
  );
};

export default App;
