import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 96px;
`;
export const FizzAndBuzz = styled.div`
  display: flex;
`;
export const ButtonFizzAndBuzz = styled.button`
  background-color: #f8f8f8;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 48px;
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
  &:hover,
  &:focus {
    background-color: #efefef;
    position: relative;
  }
`;
export const ButtonFizzBuzz = styled.button`
  width: 50%;
  height: 48px;
  background-color: #f8f8f8;
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
  &:first-child {
    border-radius: 0px 0px 0px 10px;
    border-right: 1px solid #d9d9d9;
    &:hover,
    &:focus {
      border-radius: 0px 0px 4px 10px;
    }
  }
  &:last-child {
    border-radius: 0px 0px 10px 0px;
    &:hover,
    &:focus {
      border-radius: 0px 0px 10px 4px;
    }
  }
  &:hover,
  &:focus {
    background-color: #efefef;
    height: 52px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  }
`;
