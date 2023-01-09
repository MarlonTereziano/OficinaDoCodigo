import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--black);
  flex-direction: column;

  button{
    width: 100px;
    height: 50px;
  }

  img{
    width: 8vw;
    margin-bottom: 3vw;
    margin-top: 5vw;
  }

`;

export const Content = styled.div`
  width: 30vw;
  height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: MontserratExtraBold;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
    color: var(--greenLight);
    text-transform: uppercase;
  }

  h1::after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: blink 0.8s infinite;
  }

  button{
    margin-top: 2vw;
    border: none;
    width: 30vw;
    font-size: 30px;
    text-transform: uppercase;
    font-family: MontserratExtraBold;
    background-color: var(--purple);
    color: var(--white);
    border-radius: 8px;
  }

  button:hover{
    cursor: pointer;
    filter: brightness(0.8);
    transition: 0.5s;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

`;

