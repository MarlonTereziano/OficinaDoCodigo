import Blockly from "blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

//Bloco Andar
Blockly.Blocks["andar2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SIGA")
      .appendField(new Blockly.FieldDropdown([["1", "1"]]), "dropAndar2")
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
Blockly.JavaScript["andar2"] = function (block) {
  var dropdown_abrir = block.getFieldValue("dropAndar2");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_abrir;
  return code;
};

Blockly.Blocks["controls_repeat_ext2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("REPETIR")
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
      .appendField("VEZES");
    this.appendStatementInput("DO").setCheck(null).appendField("FAÇA");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour("#00d704");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["controls_repeat_ext2"] = function (block) {
  var repeats = Number(block.getFieldValue("NUM"));
  var branch = Blockly.JavaScript.statementToCode(block, "DO");
  branch =
    Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
  var code = "";
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
    "count",
    Blockly.VARIABLE_CATEGORY_NAME
  );
  var endVar = repeats;
  if (!repeats) {
    return "";
  }
  if (repeats < 0) {
    repeats *= -1;
    branch = "if (" + loopVar + " % 2 == 1) {\n" + branch + "}\n";
  }
  code +=
    "for (var " +
    loopVar +
    " = 0; " +
    loopVar +
    " < " +
    endVar +
    "; " +
    loopVar +
    "++) {\n" +
    branch +
    "}\n";
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
          type: "controls_repeat_ext2",
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
          type: "andar2",
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
