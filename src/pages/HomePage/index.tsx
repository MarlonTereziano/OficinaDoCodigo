import React, { useState} from "react";

import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import ConfigFiles from "./initContent/content";
import { Container, ContentGame } from "./styles";
import { Header } from "../../components/header";
// import DarkTheme from '@blockly/theme-dark';

export function HomePage() {
  const [javascriptCode, setJavascriptCode] = useState("");

  let alertVar = 0;
  function workspaceDidChange(workspace: any) {
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
  }

  return (
    <Container>
      <Header/>
      <BlocklyWorkspace
        toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
          // theme: DarkTheme,
        }}
        onWorkspaceChange={workspaceDidChange}
      />
      <ContentGame>

      </ContentGame>
    </Container>
  );
}
