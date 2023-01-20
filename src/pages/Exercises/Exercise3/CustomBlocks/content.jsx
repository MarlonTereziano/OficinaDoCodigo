import Blockly from "blockly";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  Blockly.Blocks['abrir_garra'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SIGA")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "abrir")
          .appendField("VEZ(ES)")
          .appendField(new Blockly.FieldImage("https://cdn-icons-png.flaticon.com/512/61/61100.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0095d7");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['abrir_garra'] = function(block) {
    var dropdown_abrir = block.getFieldValue('abrir');
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
          type: "abrir_garra",
        },
      ],
    },
    {
      kind: "category",
      name: "LAÇOS",
      colour: "#00d704",
      contents: [
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
      ],
    },
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
