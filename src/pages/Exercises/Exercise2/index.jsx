import React, { useState } from "react";

import BlocklyWorkspace from "./BlocklyWorkspace/index";
import Blockly from "blockly";
import ConfigFiles from "./initContent/content";
import { Container, ContentGame, ContentText } from "./styles";
import { Header } from "../../../components/header";
import { TopBar } from "../../../components/topBar";

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
        <h1>Explicações aqui exercício 2</h1>
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
        <h1>{javascriptCode}</h1>
      </ContentGame>
    </Container>
  );
}
