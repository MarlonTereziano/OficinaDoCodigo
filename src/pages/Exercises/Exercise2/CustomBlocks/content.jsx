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

//bloco loop
Blockly.JavaScript['controls_repeat_ext'] = function(block) {
  // This if/else statement figures out how many times the loop
  // needs to repeat.
  // If it is the top block in the picture above block.getField('TIMES')
  // will return a field, otherwise it will return null and do the else statement.
  if (block.getField('TIMES')) {
    // This figures out what the number on the top block is, and
    // converts it to a string to be used below.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // This figures out what the number on the bottom block is, and
    // converts it to a string to be used below. For more info about
    // valueToCode see link (1)
    var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }


  // This generates code for all of the blocks inside the repeat block.
  // for more info about statementToCode see link (2)
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');


  // This adds a check so that the generated code doesn't loop
  // infinitely or for too long. For more info about this see link (3)
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);


  // This initialized the code variable.
  var code = '';
 
  // This grabs a name for the variable inside the for(...) statement
  // that won't collide with any user defined variables. For example
  // if the user already defined a 'count' variable, this variable would
  // be called something like 'count1'.
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.VARIABLE_CATEGORY_NAME);
 
  // This runs if there is a block like image (4), where the input
  // has other code inside of it. It makes sure that that code is
  // evaluated before the loop starts.
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    // This grabs a name for the variable above the for(...) statement.
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.VARIABLE_CATEGORY_NAME);
    // This adds the variable asignment before the for loop.
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }


  // This puts all the pieces together to form the gnerated code.
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';


  // This returns the code so it can be added to other code strings or used.
  return code;
};

// Bloco Matemática
Blockly.Blocks["math_number"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldNumber(0, -Infinity, Infinity, 1),
        "NUM"
      );
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
      name: "LAÇOS",
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
