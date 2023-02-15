import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const FizzAndBuzz = styled.div`
  display: flex;
`;
export const ButtonFizzAndBuzz = styled.button`
  background-color: ${(props) => {
    if (props.isCorrect === null) {
      return "#f8f8f8";
    } else if (props.isCorrect === "FizzAndBuzz") {
      return "#8ef2a2";
    }
  }};
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 58px;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: 0.3s;
  font-family: "Bungee", cursive;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #ff9900;
  border-bottom: 1px solid #d9d9d9;
  background-color: #f8f8f8;
  opacity: ${(props) => props.disabled && ".6"};
  cursor: ${(props) => props.disabled && "auto"};
  border: ${(props) => {
    if (props.isCorrect === "FizzAndBuzz") {
      return "#8ef2a2 6px solid";
    }
  }};
  &:hover,
  &:focus {
    position: relative;
    background-color: #efefef;
  }
`;
export const ButtonPass = styled.button`
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  height: 58px;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: 0.3s;
  font-family: "Bungee", cursive;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #ff9900;
  border-top: 1px solid #d9d9d9;
  background-color: #f8f8f8;
  opacity: ${(props) => props.disabled && ".6"};
  cursor: ${(props) => props.disabled && "auto"};
  border: ${(props) => {
    if (props.isCorrect === "Pass") {
      return "#8ef2a2 6px solid";
    }
  }};
  &:hover,
  &:focus {
    position: relative;
    background-color: ${(props) => !props.disabled && "#efefef"};
  }
`;

export const ButtonFizzBuzz = styled.button`
  width: 50%;
  height: 58px;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: 0.3s;
  font-family: "Bungee", cursive;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #9540e9;
  opacity: ${(props) => props.disabled && ".6"};
  cursor: ${(props) => props.disabled && "auto"};
  background-color: #f8f8f8;
  &:first-child {
    border-right: 1px solid #d9d9d9;
    border: ${(props) => {
      if (props.isCorrect === "Fizz") {
        return "#76fd7b 6px solid";
      }
    }};
  }
  &:last-child {
    border: ${(props) => {
      if (props.isCorrect === "Buzz") {
        return "#76fd7b 6px solid";
      }
    }};
  }
  &:hover,
  &:focus {
    background-color: ${(props) => !props.disabled && "#efefef"};
    height: ${(props) => !props.disabled && "58px"};
    box-shadow: ${(props) =>
      !props.disabled && "4px 4px 6px rgba(0, 0, 0, 0.25)"};
  }
`;
