import React, { useState } from "react";

// import { BlocklyWorkspace } from "react-blockly";
import  BlocklyWorkspace  from "./BlocklyWorkspace/index";
// import Blockly from "blockly";
import ConfigFiles from "./initContent/content";
import { Container, ContentGame } from "./styles";
import { Header } from "../../components/header";

export function HomePage() {
  const [javascriptCode, setJavascriptCode] = useState("");
  // const [xml, setXml] = useState("");

  // let alertVar = 0;
  // function workspaceDidChange(workspace: any) {
  //   try {
  //     const code = Blockly.JavaScript.workspaceToCode(workspace);
  //     setJavascriptCode(code);
  //     console.log(javascriptCode);
  //   } catch (e) {
  //     if (alertVar === 0) {
  //       alertVar += 1;
  //       alert("Esses blocos não encaixam!");
  //       console.log("Esses blocos não encaixam!");
  //     }
  //   }
  // }

  return (
    <Container>
      <Header />
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
        }}
        // onXmlChange={setXml}
        // onWorkspaceChange={workspaceDidChange}
      />
      <ContentGame>
        <h1>{javascriptCode}</h1>
      </ContentGame>
    </Container>
  );
}
