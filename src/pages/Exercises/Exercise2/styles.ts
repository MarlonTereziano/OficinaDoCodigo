import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: linear-gradient(to top, var(--black), var(--white)); */
  /* background-color: var(--white); */

  .blocklyWorkspace{
    width: 10rem;
    height: 10rem;
    margin-top: 8vw;
    margin-left: 1vw;
    height: 78vh;
    width: 60vw;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .fill-height {
    margin-top: 7.5vw;
    margin-left: 1vw;
    margin-right: 1vw;
    height: 78vh;
    width: 40vw;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .blocklyToolboxContents{
    background-color: red;
  }

  .blocklyToolboxDiv {
    background-color: white;
    width: 6rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  
`;

export const ContentGame = styled.div`
  margin-top: 7.5vw;
  margin-right: 1vw;
  width: 25vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  justify-content: center;

  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    font-size: 2rem;
  }
`;

export const ContentText = styled.div`
  margin-top: 7.5vw;
  margin-left: 1vw;
  width: 35vw;
  height: 78vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  justify-content: center;

  h1{
    display: flex;
    font-size: 2rem;
  }
`;


