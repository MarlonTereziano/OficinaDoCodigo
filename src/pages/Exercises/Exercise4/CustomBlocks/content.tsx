
const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

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
        
      ],
    },
  ],
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
};

export default ConfigFiles;
