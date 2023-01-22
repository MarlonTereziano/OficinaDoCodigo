import Blockly from "blockly";
import { blockRegistry } from "@toy-box/toybox-blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const customBlocks = {
  cust: {
    json: {
      type: "block_type",
      message0: "Repita %1 Vezes %2 Enquanto %3",
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
      colour: 230,
      tooltip: "",
      helpUrl: "",
      output: "NUM",
    },
    code: "1"
  },
};

Object.keys(customBlocks).map((key) =>
  blockRegistry(key, customBlocks[key].json, customBlocks[key].code)
);

//Bloco Andar
Blockly.Blocks["andar3"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SIGA")
      .appendField(new Blockly.FieldDropdown([["1", "1"]]), "dropAndar3")
      .appendField("VEZ")
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
Blockly.JavaScript["andar3"] = function (block) {
  var dropdown_abrir = block.getFieldValue("dropAndar3");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_abrir;
  return code;
};

// Blockly.Blocks["controls_repeat_ext"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("REPETIR")
//       .appendField(new Blockly.FieldNumber(0, 0, 5), "NUM")
//       .appendField("VEZES");
//     this.appendStatementInput("DO").setCheck(null).appendField("FAÇA");
//     this.setPreviousStatement(false, null);
//     this.setNextStatement(false, null);
//     this.setColour("#00d704");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["cust"] = function (block) {
//   var repeats = Number(block.getFieldValue("NUM"));
//   var branch = Blockly.JavaScript.statementToCode(block, "DO");
//   branch =
//     Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
//   var code = "";
//   var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
//     "count",
//     Blockly.VARIABLE_CATEGORY_NAME
//   );
//   var endVar = repeats;
//   if (!repeats) {
//     return "";
//   }
//   if (repeats < 0) {
//     repeats *= -1;
//     branch = "if (" + loopVar + " % 2 == 1) {\n" + branch + "}\n";
//   }
//   code +=
//     "for (var " +
//     loopVar +
//     " = 0; " +
//     loopVar +
//     " < " +
//     endVar +
//     "; " +
//     loopVar +
//     "++) {\n" +
//     branch +
//     "}\n";
    
//   return code;
// };

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
        {
          kind: "block",
          type: "math_number",
        }
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
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
