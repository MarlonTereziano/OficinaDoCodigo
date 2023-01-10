import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <h1>Selecione o nível :</h1>
      <button onClick={() => navigate("/ex1")}>1</button>
      <button onClick={() => navigate("/ex2")}>2</button>
      <button onClick={() => navigate('/home')}>3</button>
      <button onClick={() => navigate("/home")}>4</button>
    </Container>
  );
};
