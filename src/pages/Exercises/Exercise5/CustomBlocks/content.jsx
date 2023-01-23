import Blockly from "blockly";
import { blockRegistry } from "@toy-box/toybox-blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const customBlocks = {
  cust: {
    json: {
      type: "block_type",
      message0: "Repita %1 Vezes %2 Faça %3",
      args0: [
        {
          type: "input_value",
          name: "NUM",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "DO",
        },
      ],
      colour: "#d700a5",
      tooltip: "",
      helpUrl: "",
    },
  },
};

Object.keys(customBlocks).map((key) =>
  blockRegistry(key, customBlocks[key].json, customBlocks[key].code)
);

// Bloco Math
Blockly.Blocks["math_number"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldNumber(0, 0, 100, 1),
        "NUM"
      );
    this.setOutput(true, null);
    this.setColour("#d7c500");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};


//Bloco Andar
Blockly.Blocks["andar3"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SIGA")
      .appendField(
        new Blockly.FieldImage(
          "https://cdn-icons-png.flaticon.com/512/61/61100.png",
          15,
          15,
          { alt: "*", flipRtl: "FALSE" }
        )
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour("#0095d7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["andar3"] = function () {
  return "1";
};

Blockly.JavaScript["cust"] = function (block) {
  var aux = Blockly.JavaScript.valueToCode(
    block,
    "NUM",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var aux2 = Blockly.JavaScript.statementToCode(block, "DO");
  var teste = "for (var count = 0; count < " + aux + "; count++) {" + aux2 + "}";

  console.log(aux2);
  var code = teste;
  return code;
};


const INITIAL_TOOLBOX_JSON = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "LAÇO",
      colour: "#00d704",
      contents: [
        {
          kind: "block",
          type: "cust",
        },
      ],
    },
    {
      kind: "category",
      name: "DIREÇÃO",
      colour: "#0095d7",
      contents: [
        {
          kind: "block",
          type: "andar3",
        },
      ],
    },
    {
      kind: "category",
      name: "NÚMEROS",
      colour: "#d700a5",
      contents: [
        {
          kind: "block",
          type: "math_number",
        }
      ],
    }
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
