import Blockly from 'blockly';
import 'blockly/javascript';

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

const ArgRex = /^args[0-9]\d*$/;

// Código de registro biblioteca google blockly
const blockRegistry = (
  name: string,
  json: Record<string, any>,
  code: string
) => {
  Blockly.defineBlocksWithJsonArray([
    {
      ...json,
      type: json.type || name,
    },
  ]);
  (Blockly as any).JavaScript[name] = (block: Blockly.Block) => {
    const args = [] as Array<{ name: string; value: any }>;
    Object.keys(json)
      .filter((key) => ArgRex.test(key))
      .forEach((argsKey) => {
        args.push(
          ...json[argsKey].map((arg: any) => ({
            name: arg.name,
            value: block.getFieldValue(arg.type),
          }))
        );
      });
    const fn = new Function(...args.map((arg) => arg.name), `return ${code}`);
    return [
      fn(...args.map((arg) => arg.value)),
      (Blockly as any).JavaScript.ORDER_NONE,
    ];
  };
};

const customBlocks: any = {
  cust: {
    json: {
      message0: "Quando iniciar",
      nextStatement: null,
      colour: 255,
      tooltip: "s",
      helpUrl: "s"
    },
    code: "",
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
      name: "Logic",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: "#5CA65C",
      contents: [
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_number",
        },
      ],
    },
    {
      kind: "category",
      name: "Custom",
      colour: "#5CA699",
      contents: [
        {
          kind: "block",
          type: "cust",
        },
      ],
    },
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
  blockRegistry,
  customBlocks
};

export default ConfigFiles;
