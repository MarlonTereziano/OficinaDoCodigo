import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to left, #359830, white);

  .blocklyWorkspace{
    width: 10rem;
    height: 10rem;
    margin-top: 5vw;
    margin-left: 1vw;
    height: 80vh;
    width: 60vw;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .fill-height {
    margin-top: 5vw;
    margin-left: 1vw;
    height: 80vh;
    width: 60vw;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  /* .blocklyToolboxContents{
    background-color: red;
  } */

  .blocklyToolboxDiv {
    background-color: white;
    width: 6rem;
  }
  
`;

export const ContentGame = styled.div`
  margin-top: 5vw;
  margin-right: 1vw;
  width: 35vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
