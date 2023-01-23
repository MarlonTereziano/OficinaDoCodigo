import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    z-index: 12;
    button {
      width: 100%;
      height: 100%;
      border: none;
      margin: 0;
      background: none;
    }
    div {
      height: 0.6rem;
      margin: 0.3rem;
      z-index: 2;
    }
`;

export const ContainerOpen = styled.span`
    box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
    width: 60vw;
    height: 60vh;
    right: 0;
    top: 0;
    margin-right: 20vw;
    margin-top: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: var(--blueLight);
    z-index: 10;
    border-radius: 20px;

    img{
      width: 50%;
      margin-left: -20vw;
    }

    h1{
      position: absolute;
      background-color: white;
      border-radius: 20px;
      width: 27vw;
      padding: 1rem;
      margin-right: -28vw;
      margin-top: -18vw;
      border: 4px solid var(--greenLight);
      color: var(--black);
      font-family: AGENCYR;
      letter-spacing: 2PX;
    }

    button{
      position: absolute;
      margin-left: 30vw;
      margin-top: 18vw;
      width: 20vw;
      height: 8vh;
      border-radius: 10px;
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--white);
    }

    button:hover{
      cursor: pointer;
      color: var(--greenLight);
      text-decoration: underline;
    }
`;
