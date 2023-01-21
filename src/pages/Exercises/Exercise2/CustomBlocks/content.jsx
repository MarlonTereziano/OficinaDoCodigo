import Blockly from "blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

//Bloco Andar
Blockly.Blocks["andar2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SIGA")
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
        ]),
        "dropAndar2"
      )
      .appendField("VEZ(ES)")
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
Blockly.JavaScript["andar2"] = function (block) {
  var dropdown_abrir = block.getFieldValue("dropAndar2");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_abrir;
  return code;
};

// Bloco Matemática
Blockly.Blocks["math_number"] = {
  init: function () {
    this.appendDummyInput()
            .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
        ]),
        "NUM"
      )
    this.setOutput(true, null);
    this.setColour("#d700d0");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};


const INITIAL_TOOLBOX_JSON = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "DIREÇÃO",
      colour: "#0095d7",
      contents: [
        {
          kind: "block",
          type: "andar2",
        },
      ],
    },
    {
      kind: "category",
      name: "LAÇO",
      colour: "#00d704",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
        },
        {
          kind: "block",
          type: "math_number"
        }
      ],
    },
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
