import styled from "styled-components";
import grade from "../../../assets/images/grade6x6.jpg";


interface Props {
  move: any;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: linear-gradient(to top, var(--black), var(--white)); */
  /* background-color: var(--white); */

  .blocklyWorkspace {
    width: 10rem;
    height: 10rem;
    margin-top: 7.5vw;
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

  /* .blocklyToolboxContents{
    background-color: red;
  } */

  .blocklyToolboxDiv {
    background-color: white;
    width: 6rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

  h1 {
    display: flex;
    font-size: 2rem;
  }
`;

export const ContentGame = styled.div`
  margin-top: 7.5vw;
  margin-right: 1vw;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  background: url(${grade});
  background-size: 98%;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    font-size: 2rem;
    background-color: transparent;
    color: transparent;
  }

  .titleGame {
    position: absolute;
    background-color: transparent;
    color: #d40000;
    font-size: 1.3rem;
    margin-top: -20rem;
  }
`;

export const Panda = styled.img`
  display: flex;
  align-self: start;
  margin-top: -0.3rem;
  margin-right: 12.5rem;
  width: 50px;
  margin-left: ${(props: Props) => props.move};
`;
