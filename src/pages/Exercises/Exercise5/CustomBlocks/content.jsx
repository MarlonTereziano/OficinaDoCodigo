import Blockly from "blockly";
// import { blockRegistry } from "@toy-box/toybox-blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

Blockly.Blocks["siga5"] = {
  init: function () {
    this.appendDummyInput().appendField("Siga na direção:");
    this.appendValueInput("DIRECAO")
      .setCheck("String")
      .appendField("(Encaixe aqui)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0095d7");
    this.setTooltip("Siga em frente na direção especificada");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["siga5"] = function (block) {
  var value_direcao = Blockly.JavaScript.valueToCode(
    block,
    "DIRECAO",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = "siga(" + value_direcao + ");\n";
  return code;
};

Blockly.Blocks['direita5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vire à direita  ");
    this.setOutput(true, "String");
    this.setColour("#d700a5");
    this.setTooltip("Mude a direção para a direita");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['direita5'] = function(block) {
  var code = '"direita"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['esquerda5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vire à esquerda  ");
    this.setOutput(true, "String");
    this.setColour("#00c1d7");
    this.setTooltip("Mude a direção para a esquerda");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['esquerda5'] = function(block) {
  var code = 'esquerda';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['andar5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Andar");
    this.setOutput(true, "String");
    this.setColour("#d7d700");
    this.setTooltip("Andar um passo");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['andar5'] = function(block) {
  var code = '"andar"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

const INITIAL_TOOLBOX_JSON = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "SIGA",
      colour: "#0095d7",
      contents: [
        {
          kind: "block",
          type: "siga5",
        },
      ],
    },
    {
      kind: "category",
      name: "DIREÇÕES",
      colour: "#d700a5",
      contents: [
        {
          kind: "block",
          type: "esquerda5",
        },
        {
          kind: "block",
          type: "direita5",
        },
        {
          kind: "block",
          type: "andar5",
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
