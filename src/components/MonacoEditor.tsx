import { FC } from "react";
import { Editor, OnChange, EditorProps, OnMount } from "@monaco-editor/react";
import { EditorLanguage, EditorTheme } from "../types/CodeEditorTypes";

type Options = EditorProps["options"];

interface MonacoEditorProps {
  code?: string;
  onChange?: OnChange;
  onMount?: OnMount;
  height?: string | number;
  language: EditorLanguage;
  theme: EditorTheme;
  options?: Options;
}

const baseOptions: Options = {
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  lineNumbers: "off",
  fontSize: 14,
  scrollbar: {
    vertical: "hidden",
  },
  padding: {
    top: 20,
    bottom: 20,
  },
  automaticLayout: true,
};

const MonacoEditor: FC<MonacoEditorProps> = (props) => {
  const {
    code,
    onChange,
    language,
    theme,
    options = {},
    onMount,
    height,
  } = props;

  return (
    <Editor
      onMount={onMount}
      value={code}
      height={height ?? "100%"}
      width="100%"
      language={language}
      onChange={onChange}
      theme={theme}
      options={{ ...baseOptions, ...options }}
    />
  );
};

export default MonacoEditor;
