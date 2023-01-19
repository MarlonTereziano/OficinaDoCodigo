import React, { useState } from "react";

import BlocklyWorkspace from "./BlocklyWorkspace/index";
import Blockly from "blockly";
import ConfigFiles from "./CustomBlocks/content";

import { Container, ContentGame, ContentText, Panda } from "./styles";

import { Header } from "../../../components/header";
import { TopBar } from "../../../components/topBar";

import panda from "../../../assets/images/panda.png";
import bambu from "../../../assets/images/bambu.png";

import { BiCaretDown, BiCaretRight } from "react-icons/bi";

export function Exercise1() {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [countBlocks, setCountBlocks] = useState();
  const [countBlocks2, setCountBlocks2] = useState();
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
    setCountBlocks(Blockly.mainWorkspace.getTopBlocks().length);
    setCountBlocks2(Blockly.mainWorkspace.getAllBlocks().length);
    if (countBlocks === 0 && countBlocks2 === 0) {
      setAux(0);
    } else {
      setAux(countBlocks2 - countBlocks + 1);
    }
    console.log(aux);
    console.log(countBlocks);
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
        <button className="header" onClick={handleOpen}>
          {isOpen ? <BiCaretDown /> : <BiCaretRight />}O que é programação em
          blocos?
        </button>
        {isOpen ? (
          <h2 className="descriptionBLock">
            Programação em blocos é um conjunto de instruções que se pode dar ao
            computador para realizar inúmeras ativididades, como por exemplo,
            mover personagens em um tabuleiro! "Blocks" é uma linguagem de
            programação que permite criar animações, gráficos e jogos.
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
            <h2>
              TABULEIRO DO PANDA NÍVEL 1 !
            </h2>
            <p>NESTE PRIMEIRO NÍVEL LEVAREMOS O PANDA AO SEU ALIMENTO (BAMBU)! </p>
           <p> PARA ISSO, UTILIZAREMOS O BLOCO SIGA, QUE PODE SER ENCAIXADO MAIS DE
            UMA VEZ EM SEGUIDA!
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
