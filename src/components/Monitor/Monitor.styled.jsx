import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const StartButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 80px;
  line-height: 97px;
  color: #f8f8f8;
  border-radius: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  animation: pulse 2s infinite ease-in-out;
  &:hover,
  &:focus {
    position: relative;
    scale: 1.04;
    animation: none;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }

    70% {
      transform: scale(1);
    }

    100% {
      transform: scale(0.9);
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 164px;
`;

export const CounterContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 80px;
  line-height: 97px;
  text-align: center;
  color: #f8f8f8;
`;

export const TimerContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  width: 100%;
  height: 16px;
`;

export const TimerContant = styled.div`
  background-color: #ff9900;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 16px;
  animation: loading 2s linear;
  @keyframes loading {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const ScoreContent = styled.div`
  width: 100%;
  padding: 25px 0;
`;

export const YourScoreParagraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  color: #f8f8f8;
  margin-bottom: 10px;
  text-align: center;
`;

export const ScoreParagraph = styled.p`
  margin: 0;
  font-size: 26px;
  line-height: 31px;
  color: #f8f8f8;
  margin-bottom: 20px;
  text-align: center;
`;

export const TryButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: #f8f8f8;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 20px;
  line-height: 24px;
  color: #9540e9;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* animation: pulse 2s infinite ease-in-out; */
  transition: 0.3s;
  opacity: ${(props) => props.disabled && ".6"};
  animation: ${(props) =>
    props.disabled ? "none" : "pulse 2s infinite ease-in-out"};
  &:hover,
  &:focus {
    position: relative;
    scale: ${(props) => (props.disabled ? "none" : "1.04")};
    animation: none;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    70% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
`;
