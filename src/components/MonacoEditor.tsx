import { FC, useCallback } from "react";
import { Editor, OnChange, EditorProps } from "@monaco-editor/react";
import { EditorLanguage, EditorTheme } from "../types/CodeEditorTypes";

type Options = EditorProps["options"];

interface MonacoEditorProps {
  code?: string;
  onChange?: (value: string | undefined) => void;
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
  const { code, onChange, language, theme, options = {} } = props;

  const handleEditorChange: OnChange = useCallback(
    (value) => {
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <Editor
      value={code}
      height="100%"
      width="100%"
      language={language}
      onChange={handleEditorChange}
      theme={theme}
      options={{ ...baseOptions, ...options }}
    />
  );
};

export default MonacoEditor;
