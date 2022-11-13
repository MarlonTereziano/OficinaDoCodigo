import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  .fill-height {
    height: 80vh;
    width: 60vw;
  }
  #code {
    height: 80vh;
    width: 30vw;
    resize: vertical;
  }
`;
