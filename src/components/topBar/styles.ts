import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 2.5vw;
  width: 100vw;
  background-color: #71c837;
  position: absolute;
  top: 0;
  margin-top: 5.6vw;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;

  h1{
    font-size: 20px;
    text-transform: uppercase;;
    font-family: Montserrat; 
    color: var(--white);
  }

  button {
    color: var(--pink);
    border: 3px solid var(--pink);
    border-radius: 100%;
    cursor: pointer;
    font-size: 15px;
    width: 1.5rem;
    height: 1.5rem;
    font-family: "MontserratExtraBold";
    margin-left: 1vw;
  }

  button:hover {
    width: 2rem;
    height: 2rem;
    border: 3px solid var(--greenLight);
    transition: 0.5s;
  }

`;
