import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 5vw;
  top: 0;
  background-color: var(--black);
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  color: #359830;
  font-family: arial;
  font-size: 0.6vw;
  letter-spacing: 0.05rem;

  h1{
    font-family: AGENCYR;
    letter-spacing: 2.5px;
    font-weight: bold;
  }

  span {
    display: flex;
    flex-direction: row;
  }

  span:hover {
    cursor: pointer;
  }

  img {
    margin-right: 0.5vw;
    height: 4vw;
  }
`;
