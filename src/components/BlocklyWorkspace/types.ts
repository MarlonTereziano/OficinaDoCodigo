export type MessageType = string

export type FieldType = 'field_input'
  | 'field_dropdown'
  | 'field_checkbox'
  | 'field_colour'
  | 'field_number'
  | 'field_angle'
  | 'field_variable'
  | 'field_date'
  | 'field_label'
  | 'field_image'

export type InputType = 'input_value' | 'input_statement' | 'input_dummy'

export type ArgsType = FieldType | InputType

export interface ArgsProps {
  type: ArgsType
  name: string
  variable?: string
  variableTypes?: string[]
  check?: string
}

export interface ArgsN {
  args0?: ArgsProps
  args1?: ArgsProps
  args2?: ArgsProps
  args3?: ArgsProps
  args4?: ArgsProps
  args5?: ArgsProps
  args6?: ArgsProps
  args7?: ArgsProps
  args8?: ArgsProps
  args9?: ArgsProps
}

export interface MessageN {
  message0?: string
  message1?: string
  message2?: string
  message3?: string
  message4?: string
  message5?: string
  message6?: string
  message7?: string
  message8?: string
  message9?: string
}

export type BaseType = string | null

export type StatementType = 'Action' | null

export interface BlockSchema extends ArgsN, MessageN {
  type: string
  colour?: number
  output?: BaseType
  previousStatement?: StatementType
  nextStatement?: StatementType
}