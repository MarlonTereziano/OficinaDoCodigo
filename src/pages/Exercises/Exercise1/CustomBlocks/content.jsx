import Blockly from "blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

Blockly.Blocks["siga"] = {
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
    this.setNextStatement(true, null);
    this.setColour("#0095d7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["siga"] = function (block) {
  var dropdown_abrir = block.getFieldValue("abrir");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_abrir;
  return code;
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
          type: "siga",
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
