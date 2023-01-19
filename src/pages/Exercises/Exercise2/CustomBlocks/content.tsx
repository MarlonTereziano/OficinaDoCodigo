import { blockRegistry } from "../../../../utils/registry";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const customBlocks: any = {
  blockSiga: {
    json: {
      message0: "SIGA %1",
      args0: [
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      output: "VALUE",
      colour: "#0095d7",
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
    },
    code: "VALUE = 1",
  },
  blockDireita: {
    json: {
      message0: "DIREITA %1",
      args0: [
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      output: "VALUE",
      colour: "#c900d7",
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
    },
    code: "VALUE = 1",
  },
  blockEsquerda: {
    json: {
      message0: "ESQUERDA %1",
      args0: [
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      output: "VALUE",
      colour: "#12d700",
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
    },
    code: "VALUE = 1",
  },
  
};
Object.keys(customBlocks).map((key) =>
  blockRegistry(key, customBlocks[key].json, customBlocks[key].code)
);

const INITIAL_TOOLBOX_JSON = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "INICIAR!",
      colour: "#0095d7",
      contents: [
        {
          kind: "block",
          type: "blockSiga",
        },
        {
          kind: "block",
          type: "blockDireita",
        },
        {
          kind: "block",
          type: "blockEsquerda",
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
