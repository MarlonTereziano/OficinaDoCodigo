import { Container, ContainerOpen } from "./styles";
import { useNavigate } from "react-router-dom";
import panda from "../../assets/images/panda.png";

export const DropDown = (page: any) => {

  let navigate = useNavigate();

  return (
    <Container>
      {page.page === "/ex5" ? (
        <ContainerOpen>
          <img src={panda} alt="" />
          <h1>PARABÉNS, VOCÊ FINALIZOU TODOS OS NÍVEIS!</h1>
          <button onClick={() => navigate("/")}>
            {" "}
            VOLTAR AO INÍCIO {" >>"}{" "}
          </button>
        </ContainerOpen>
      ) : (
        <ContainerOpen>
          <img src={panda} alt="" />
          <h1>PARABÉNS, VOCÊ AVANÇOU DE NÍVEL!</h1>
          <button onClick={() => navigate(page.page)}>
            {" "}
            PRÓXIMO NÍVEL {" >>"}{" "}
          </button>
        </ContainerOpen>
      )}
    </Container>
  );
};
