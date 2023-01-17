## 代码可视化编辑器

```tsx
import React, { useState } from "react";
import Blockly from "blockly";
import ZhHans from 'blockly/msg/zh-hans';
import parse from 'html-react-parser';
import { BlocklyWorkspace, blockRegistry } from "@toy-box/toybox-blockly";

Blockly.setLocale(ZhHans)

export default function App() {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"><field></block></xml>';
  const customBlocks = {
    cust: {
      json: {
        "message0": 'length of %1',
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
          }
        ],
        "output": "Number",
        "colour": 160,
        "tooltip": "Returns number of letters in the provided text.",
        "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
      },
      code: "(VALUE || '').length"
    }
  }
  Object.keys(customBlocks)
    .map(key => blockRegistry(key, customBlocks[key].json, customBlocks[key].code))

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      {
        kind: "category",
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "cust",
          },
        ],
      },
    ],
  };
  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        style={{ height: '100vh' }}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      <pre id="generated-xml">{parse(xml)}</pre>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
    </>
  );
}
```