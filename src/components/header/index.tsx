import { Container } from "./styles";
import logoIF from "../../assets/images/if.png";

export const Header = () => {
  return (
    <Container>
      <img src={logoIF} alt="Logo If" />
      <div className="divLogo">
      <h1>OFICINA <br/> DO <br/> CÓDIGO</h1>
      </div>
    </Container>
  );
};
