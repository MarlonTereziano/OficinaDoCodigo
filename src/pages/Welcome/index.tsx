import { Container, Content } from "./styles";
import { useEffect } from "react";

export const Welcome = () => {
  useEffect(() => {
    function typeWriter(e: any) {
      const textoArray = e.innerHTML.split("");
      e.innerHTML = "";
      textoArray.forEach((letra: any, i: any) => {
        setTimeout(() => (e.innerHTML += letra), 200 * i);
      });
    }
    const texto = document.querySelector("h1");
    typeWriter(texto);
  }, []);
  return (
    <Container>
      <Content>
        <h1>Bem-vindos à oficina do código!</h1>
      </Content>
    </Container>
  );
};
