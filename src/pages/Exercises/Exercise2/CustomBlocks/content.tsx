import { blockRegistry } from "../../../../utils/registry";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const customBlocks: any = {
  cust2: {
    json: {
      message0: "SIGA %1 VEZES",
      args0: [
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      previousStatement: null,
      output: "VALUE",
      colour: "#0095d7",
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
    },
    code: "VALUE = 1",
  },
  cust3: {
    json: {
      message0: "%1",
      type: "input_value",
      args0: [
        {
          type: "field_input",
          name: "VALUE",
        },
      ],
      output: "VALUE",
      colour: "#0095d7",
      tooltip: "Returns number of letters in the provided text.",
      helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
    },
  },

  // custom2: {
  //   json: {
  //     type: "block_type",
  //     message0: "%1 %2",
  //     args0: [
  //       {
  //         type: "field_image",
  //         src: "https://www.gstatic.com/codesite/ph/images/star_on.gif",
  //         width: 15,
  //         height: 15,
  //         alt: "*",
  //         flipRtl: false,
  //       },
  //       {
  //         type: "input_value",
  //         name: "NAME",
  //         align: "RIGHT",
  //       },
  //     ],
  //     previousStatement: null,
  //     nextStatement: null,
  //     colour: 230,
  //     tooltip: "",
  //     helpUrl: "",
  //   },
  //   // code: "VALUE = 1",
  // },
};
Object.keys(customBlocks).map((key) =>
  blockRegistry(key, customBlocks[key].json, customBlocks[key].code)
);

const INITIAL_TOOLBOX_JSON = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "BLOCOS!",
      colour: "#0095d7",
      contents: [
        {
          kind: "block",
          type: "cust2",
        },
        {
          kind: "block",
          type: "cust3",
        },
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          blockxml:
            '<block type="controls_repeat_ext">\n' +
            '      <value name="TIMES">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>",
        },
        {
          kind: "block",
          type: "controls_repeat_ext",
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
