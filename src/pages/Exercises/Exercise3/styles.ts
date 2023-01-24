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

  .blocklyToolboxContents
    .blocklyToolboxCategory
    .blocklyTreeRow
    .blocklyTreeRowContentContainer {
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
    z-index: 1;
  }

  .blocklyMainWorkspaceScrollbar {
    z-index: 1;
  }
`;

export const ContentText = styled.div`
  margin-top: 7.5vw;
  margin-left: 1vw;
  padding: 0.8rem;
  width: 30vw;
  height: 78vh;
  overflow: auto;
  display: flex;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  align-items: flex-start;

  h2::first-letter {
    display: flex;
    position: absolute;
    align-items: flex-start;
    justify-content: start;
    color: var(--pink);
    font-family: "MontserratExtraBold";
    float: top;
    font-size: 3rem;
  }

  .descriptionBLock {
    font-family: AGENCYR;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    padding-top: 0rem;
    letter-spacing: 1.5px;
    text-align: JUSTIFY;
    overflow: auto;
    text-transform: uppercase;
  }

  h2 {
    text-indent: 1.5rem;
    font-family: AGENCYR;
    font-weight: bold;
    padding: 1rem;
  }

  p {
    font-family: AGENCYR;
    letter-spacing: 1px;
    padding: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    text-indent: 2rem;
    font-size: 1.2rem;
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;

    img {
      margin-top: 1rem;
      width: 100%;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 28vw;
    height: 2.7rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-family: MontserratExtraBold;
    letter-spacing: 0.005vw;
    font-size: 0.8rem;
    background-color: #71c837;
    border: none;
    color: white;
    border-bottom: 1px solid;

    svg {
      width: 10%;
      height: 400%;
    }
  }

  .header:hover {
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

  h1 {
    position: absolute;
  }

  .bambu {
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
