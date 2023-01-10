import { blockRegistry } from "@toy-box/toybox-blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const customBlocks2: any = {
  cust2: {
    json: {
      message0: "teste2 %1",
      args0: [
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      output: "Number",
      colour: 160,
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
      // previousStatement: null,
    },
    code: "VALUE = 1;",
  },
};
Object.keys(customBlocks2).map((key) =>
  blockRegistry(key, customBlocks2[key].json, customBlocks2[key].code)
);

const INITIAL_TOOLBOX_JSON = {
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
          type: "cust2",
        },
      ],
    },
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
