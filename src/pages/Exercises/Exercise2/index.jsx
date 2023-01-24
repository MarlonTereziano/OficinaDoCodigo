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
import atv2 from "../../../assets/images/Prints/atv2.png";
import menu from "../../../assets/images/Prints/menu.png";

import { BiCaretDown, BiCaretRight } from "react-icons/bi";

export function Exercise2() {
  const [javascriptCode, setJavascriptCode] = useState("");
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
      {javascriptCode === "5" ? <DropDown page="/ex3" /> : <></>}
      <ContentText>
        <button className="header" onClick={handleOpen}>
          {isOpen ? <BiCaretDown /> : <BiCaretRight />}O que é menu suspenso?
        </button>
        {isOpen ? (
          <>
            <h2 className="descriptionBLock">
              Menu suspenso consiste em um menu em que suas opções são ocultas
              até que um clique seja acionado, ou seja, várias sub-opções de uma
              opção num menu. E, por incrível que pareça, é algo extremamente
              simples de ser feito!
              <p>
                <img src={menu} className="menu2" alt="" />
              </p>
            </h2>
          </>
        ) : (
          <></>
        )}

        <button className="header" onClick={handleOpenAtv}>
          {isOpenAtv ? <BiCaretDown /> : <BiCaretRight />}
          Descrição da Atividade
        </button>
        {isOpenAtv ? (
          <>
            <h2>TABULEIRO DO PANDA NÍVEL 2!</h2>
            <p>
              NO SEGUNDO NÍVEL LEVAREMOS NOVAMENTE O PANDA AO SEU ALIMENTO
              (BAMBU)!{" "}
            </p>
            <p>
              {" "}
              PARA ISSO, UTILIZAREMOS NOVAMENTE O BLOCO SIGA, MAS DESSA VEZ
              VAMOS SELECIONAR O NÚMERO DE PASSOS PARA O PANDA SE MOVER.{" "}
            </p>
            <p>
              <img src={atv2} alt="" />
              <br />
            </p>
            <p>
              PARA SELECIONAR A QUANTIDADE DE PASSOS, BASTA ARRASTAR O BLOCO
              SIGA PARA O QUADRADO DE TRABALHO, E CLICAR NO NÚMERO DENTRO DO
              BLOCO (COMO MOSTRADO NA IMAGEM). ASSIM, O PANDA COMEÇA A SE
              MOVIMENTAR!
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
          move={5 * parseInt(javascriptCode) + "rem"}
        />
        <img className="bambu" src={bambu} alt="bambu" />
      </ContentGame>
    </Container>
  );
}
