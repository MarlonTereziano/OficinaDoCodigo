import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import logoIF from "../../assets/images/if.png";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const [test, setTest] = useState<any>();
  let navigate = useNavigate();

  useEffect(() => {
    function typeWriter(e: any) {
      const textoArray = e.innerHTML.split("");
      e.innerHTML = "";
      textoArray.forEach((letra: any, i: any) => {
        setTimeout(() => (e.innerHTML += letra), 150 * i);
      });
    }
    const texto = document.querySelector("h1");
    typeWriter(texto);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTest(<button onClick={()=>navigate("/ex1")}>Começar Agora!</button>);
    }, 5500);
  }, [navigate]);

  return (
    <Container>
      <img src={logoIF} alt="logoIF" />
      <Content>
        <h1>Bem-vindos à oficina do código!</h1>
        <span>{test}</span>
      </Content>
    </Container>
  );
};
