import { Container } from "./styles";
import logoIF from "../../assets/images/if.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <span onClick={() => navigate("/")}>
        <img src={logoIF} alt="Logo If" />
        <div className="divLogo">
          <h1>
            OFICINA <br /> DO <br /> CÓDIGO
          </h1>
        </div>
      </span>
    </Container>
  );
};
