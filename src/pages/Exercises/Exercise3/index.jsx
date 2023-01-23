import React, { useState } from "react";

import BlocklyWorkspace from "../../../components/BlocklyWorkspace/index";
import Blockly from "blockly";
import ConfigFiles from "./CustomBlocks/content";

import { Container, ContentGame, ContentText, Panda } from "./styles";

import { Header } from "../../../components/header";
import { TopBar } from "../../../components/topBar";
import { DropDown } from "../../../components/DropDown";

import panda from "../../../assets/images/panda.png";
import bambu from "../../../assets/images/bambu.png";
import atv3 from "../../../assets/images/Prints/atv3.png";
import laço from "../../../assets/images/Prints/laço.png";

import { BiCaretDown, BiCaretRight } from "react-icons/bi";

export function Exercise3() {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [aux, setAux] = useState(0);
  const [setXml] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAtv, setIsOpenAtv] = useState(false);

  let alertVar = 0;

  function workspaceDidChange(workspace) {
    try {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      setJavascriptCode(code);
      console.log(javascriptCode);
    } catch (e) {
      if (alertVar === 0) {
        alertVar += 1;
        alert("Esses blocos não encaixam!");
        console.log("Esses blocos não encaixam!");
      }
    }

    setAux(javascriptCode[28] * javascriptCode[44]);
    console.log(aux);
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
      {aux === 5 ? <DropDown page="/ex4" /> : <></>}
      <ContentText>
        <button className="header" onClick={handleOpen}>
          {isOpen ? <BiCaretDown /> : <BiCaretRight />}O que são blocos com
          laço?
        </button>
        {isOpen ? (
          <h2 className="descriptionBLock">
            Laço de Repetição, ou loop, é uma estrutura de programação que
            repete uma sequência de instruções até que uma condição específica
            seja atendida. Os programadores usam loops para percorrer os
            valores, adicionar somas de números, repetir funções e muitas outras
            coisas.
            <p>
              <img src={laço} alt="" />
            </p>
          </h2>
        ) : (
          <></>
        )}

        <button className="header" onClick={handleOpenAtv}>
          {isOpenAtv ? <BiCaretDown /> : <BiCaretRight />}
          Descrição da Atividade
        </button>
        {isOpenAtv ? (
          <>
            <h2>TABULEIRO DO PANDA NÍVEL 3!</h2>
            <p>
              NO TERCEIRO NÍVEL LEVAREMOS O PANDA AO SEU ALIMENTO COM A AJUDA DE
              LAÇOS!{" "}
            </p>
            <p>
              {" "}
              NESSA ATIVIDADE, UTILIZAREMOS O NOVO BLOCO "REPETIR", E DENTRO
              DELE COLOCAREMOS O BLOCO JÁ CONHECIDO "SIGA".{" "}
            </p>
            <p>
              <img src={atv3} alt="" />
              <br />
            </p>
            <p>
              PARA SELECIONAR A QUANTIDADE DE PASSOS, BASTA ARRASTAR O BLOCO
              SIGA DENTRO DO BLOCO REPETIR, E CLICAR NO NÚMERO MOSTRADO DENTRO
              DO BLOCO REPETIR. ASSIM, O PANDA COMEÇA A SE MOVIMENTAR!
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
        <Panda src={panda} alt="panda" move={5 * aux + "rem"} />
        <img className="bambu" src={bambu} alt="bambu" />
      </ContentGame>
    </Container>
  );
}
