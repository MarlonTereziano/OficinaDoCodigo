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
      {aux === 5 ? (<DropDown page="/ex4"/>):(<></>)}
      <ContentText>
        <button className="header" onClick={handleOpen}>
          {isOpen ? <BiCaretDown /> : <BiCaretRight />}O que é programação em
          blocos?
        </button>
        {isOpen ? (
          <h2>
            Resumidamente uma linguagem de programação baseada em blocos
            funciona como um quebra-cabeça, no qual cada peça é um comando e
            quando montamos uma sequência de peças conseguimos escrever um
            programa.
          </h2>
        ) : (
          <></>
        )}

        <button className="header" onClick={handleOpenAtv}>
          {isOpenAtv ? <BiCaretDown /> : <BiCaretRight />}
          Descrição da Atividade
        </button>
        {isOpenAtv ? (
          <h2>
            Loren Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti in animi officia harum, provident et deserunt ducimus
            accusantium similique hic nostrum dolorum dolor natus autem minus
            mollitia! Quasi, sed culpa. Loren Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti in animi officia harum,
            provident et deserunt ducimus accusantium similique hic nostrum
            dolorum dolor natus autem minus mollitia! Quasi, sed culpa. Loren
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in
            animi officia harum, provident et deserunt ducimus accusantium
            similique hic nostrum dolorum dolor natus autem minus mollitia!
            Quasi, sed culpa. Loren Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti in animi officia harum, provident et
            deserunt ducimus accusantium similique hic nostrum dolorum dolor
            natus autem minus mollitia! Quasi, sed culpa. Loren Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deleniti in animi
            officia harum, provident et deserunt ducimus accusantium similique
            hic nostrum dolorum dolor natus autem minus mollitia! Quasi, sed
            culpa.
          </h2>
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
        <h1>{javascriptCode}</h1>
        <img className="bambu" src={bambu} alt="bambu" />
      </ContentGame>
    </Container>
  );
}
