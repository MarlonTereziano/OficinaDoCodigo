import React, { useState } from "react";

import BlocklyWorkspace from "./BlocklyWorkspace/index";
import Blockly from "blockly";
import br from 'blockly/msg/pt-br';
import ConfigFiles from "./CustomBlocks/content";

import { Container, ContentGame, ContentText, Panda } from "./styles";

import { Header } from "../../../components/header";
import { TopBar } from "../../../components/topBar";

import panda from "../../../assets/images/panda.png";
import bambu from "../../../assets/images/bambu.png";

Blockly.setLocale(br);

export function Exercise2() {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [setXml] = useState("");

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

  return (
    <Container>
      <Header />
      <TopBar />
      <ContentText>
        <h1>Explicações aqui Exercício 1</h1>
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
        <Panda src={panda} alt="panda" move={javascriptCode} />
        {console.log({ javascriptCode })}
        <img className="bambu" src={bambu} alt="bambu" />
      </ContentGame>
    </Container>
  );
}
