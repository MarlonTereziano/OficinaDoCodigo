import React, { useState } from "react";

import BlocklyWorkspace from "../../../components/BlocklyWorkspace/index";
import Blockly from "blockly";
import ConfigFiles from "./CustomBlocks/content";

import { Container, ContentGame, ContentText, Panda } from "./styles";

import { Header } from "../../../components/header";
import { TopBar } from "../../../components/topBar";

import panda from "../../../assets/images/panda.png";
import bambu from "../../../assets/images/bambu.png";

import { BiCaretDown, BiCaretRight } from "react-icons/bi";

export function Exercise5() {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [aux, setAux] = useState(0);
  const [setXml] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAtv, setIsOpenAtv] = useState(false);
  let [counter, setCounter] = useState(0);
  let [direita, setDireita] = useState(0);
  let [esquerda, setEsquerda] = useState(0);
  let countBlocksAux = Blockly.mainWorkspace.getAllBlocks();
  let count = 0;
  let countDireita = 0;
  let countEsquerda = 0;
  let childBlock;
  let alertVar = 0;

  function workspaceDidChange(workspace) {
    try {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      setJavascriptCode(code);
    } catch (e) {
      if (alertVar === 0) {
        alertVar += 1;
        alert("Esses blocos não encaixam!");
        console.log("Esses blocos não encaixam!");
      }
    }

    console.log(countBlocksAux[0]);

    if (countBlocksAux[0]) {
      childBlock = countBlocksAux[0].childBlocks_;
      console.log(childBlock);
      while (childBlock[0]?.length) {
        childBlock = childBlock[0]?.childBlocks_;
        count++;
      }
      setAux(count + 1);
      console.log(aux);

      // if (countBlocksAux[0].type === "siga5" && countBlocksAux[0].childBlocks_[0].type === "esquerda5") {
      //   setDireita(++countDireita);
      //   // console.log(direita);
      // }
    }
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenAtv = () => {
    setIsOpenAtv(!isOpenAtv);
  };

  return (
    <Container>
      <Header />
      <TopBar />
      <ContentText>
        <button className="header" onClick={handleOpenAtv}>
          {isOpenAtv ? <BiCaretDown /> : <BiCaretRight />}
          Descrição da Atividade
        </button>
        {isOpenAtv ? (
          <>
            <h2>TABULEIRO DO PANDA NÍVEL 4!</h2>
            <p>
              NO QUARTO NÍVEL LEVAREMOS O PANDA AO SEU ALIMENTO COM A AJUDA DE
              LAÇOS E NÚMEROS SEPARADOS!{" "}
            </p>
            <p>
              {" "}
              NESSA ATIVIDADE, UTILIZAREMOS O BLOCO "REPETIR", E DENTRO DELE O
              BLOCO "SIGA", COMO NA ATIVIDADE ANTERIOR. PORÉM, DESSA VEZ
              ADICIONAREMOS O BLOCO NÚMERO DENTRO DO LAÇO, QUE PERMITE ADICIONAR
              QUALQUER VALOR DIGITADO PELO TECLADO{" "}
            </p>
            <p>
              <br />
            </p>
            <p>
              PARA SELECIONAR A QUANTIDADE DE PASSOS, BASTA CLICAR DENTRO DO
              BLOCO NÚMERO (APÓS ADICIONÁ-LO DENTRO DO LOOP), E DIGITAR O NÚMERO
              DE VEZES QUE DESEJA ANDAR. ASSIM, O PANDA COMEÇA A SE MOVIMENTAR!
            </p>
          </>
        ) : (
          <></>
        )}
      </ContentText>
      <BlocklyWorkspace
        toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 15,
            length: 4,
            colour: "#ccc",
            snap: true,
          },
        }}
        onXmlChange={setXml}
        onWorkspaceChange={workspaceDidChange}
      />
      <ContentGame>
        <h1 className="titleGame">VEJA FUNCIONANDO!</h1>
        <Panda
          src={panda}
          alt="panda"
          move={5 * aux + "rem"}
          direita={"12.5rem"}
        />
        <h1>{direita}</h1>
        <img className="bambu" src={bambu} alt="bambu" />
      </ContentGame>
    </Container>
  );
}
