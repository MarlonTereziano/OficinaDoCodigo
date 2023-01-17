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

  .blocklyToolboxContents .blocklyToolboxCategory .blocklyTreeRow .blocklyTreeRowContentContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin-left: -1rem;
  }

  .blocklyToolboxDiv {
    background-color: white;
    width: 6rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ContentText = styled.div`
  margin-top: 7.5vw;
  margin-left: 1vw;
  padding-top: 0.8vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  width: 30vw;
  height: 78vh;
  overflow: hidden;
  display: flex;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  align-items: flex-start;

  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6%;
    text-transform: uppercase;
    font-family: MontserratExtraBold;
    letter-spacing: 0.005vw;
    font-size: 0.8rem;
    background-color: #71c837;
    border: none;
    color: white;
    svg{
      width: 5%;
      height: 100%;
    }
  }

  .header:hover{
    cursor: pointer;
    filter: brightness(0.9);
    transition: 0.5s;
  }

  h1 {
    display: flex;
    font-size: 2rem;
  }
`;

export const ContentGame = styled.div`
  margin-top: 7.5vw;
  margin-right: 4vw;
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

  .titleGame {
    position: absolute;
    background-color: transparent;
    color: #d40000;
    font-size: 1.3rem;
    margin-top: -20rem;
  }

  h1{
    position: absolute;
  }

  .bambu{
    position: absolute;
    margin-top: -13.8rem;
    margin-right: -13rem;
    width: 2.5rem;
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
