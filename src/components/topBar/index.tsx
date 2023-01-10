import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <h1>Selecione o nível :</h1>
      <button onClick={() => navigate("/")}>1</button>
      <button onClick={() => navigate("/sobre")}>2</button>
      <button onClick={() => navigate('/metodologia')}>3</button>
      <button onClick={() => navigate("/solucoes")}>4</button>
    </Container>
  );
};
