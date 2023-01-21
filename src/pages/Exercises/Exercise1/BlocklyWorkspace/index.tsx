import React, { CSSProperties, FC } from 'react';
import Blockly from 'blockly';
import language from 'blockly/msg/pt-br';
import useBlocklyWorkspace from './useBlockly';

Blockly.setLocale(language);

export interface CustomBlock {
  json: Object
  code: string
}

export interface IBlocklyWorkspaceProps {
  initialXml?: string
  toolboxConfiguration?: any
  workspaceConfiguration?: any
  className?: string
  style?: CSSProperties
  onWorkspaceChange?: (workspace: Blockly.WorkspaceSvg) => void
  onImportXmlError?: (e: any) => void
  onXmlChange?: (xml: string) => void
  onInject?: (workspace: Blockly.WorkspaceSvg) => void
  onDispose?: (workspace: Blockly.WorkspaceSvg) => void
  customBlocks?: Record<string, CustomBlock>
}

const BlocklyWorkspace: FC<IBlocklyWorkspaceProps> = ({
  initialXml,
  toolboxConfiguration,
  workspaceConfiguration,
  className,
  style,
  onWorkspaceChange,
  onXmlChange,
  onImportXmlError,
  onInject,
  onDispose,
  customBlocks
}) => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const { xml } = useBlocklyWorkspace({
    ref: editorRef,
    initialXml,
    toolboxConfiguration,
    workspaceConfiguration,
    onWorkspaceChange,
    onImportXmlError,
    onInject,
    onDispose,
    customBlocks
  });
  const onXmlChangeRef = React.useRef(onXmlChange);
  React.useEffect(() => {
    onXmlChangeRef.current = onXmlChange;
  }, [onXmlChange]);
  React.useEffect(() => {
    if (onXmlChangeRef.current && xml) {
      onXmlChangeRef.current(xml);
    }
  }, [xml]);

  return <div className={className} style={style} ref={editorRef} />
}


export default BlocklyWorkspace;