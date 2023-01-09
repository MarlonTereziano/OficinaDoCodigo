import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 30vw;
  height: 30vh;
  display: flex;
  align-self: center;
  justify-content: center;

  h1 {
    max-width: 480px;
    text-align: center;
    margin: 60px auto;
    font-family: "Courier New", Courier, monospace;
    color: #ff9f1a;
  }

  h1::after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;-
    }
  }
`;

