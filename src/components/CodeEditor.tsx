import { FC, useCallback, useRef, useState } from "react";
import { OnChange, EditorProps, OnMount } from "@monaco-editor/react";
import {
  EditorType,
  EditorLanguage,
  EditorTheme,
} from "../types/CodeEditorTypes";
import { useVim } from "../hooks/useVim";
import { useLocalState } from "../context/LocalState";
import { css } from "../../styled-system/css";
import MonacoEditor from "./MonacoEditor";

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
  glyphMargin: false,
  inlayHints: { enabled: "off" },
  lineNumbers: "off",
  fontSize: 14,
  scrollbar: {
    vertical: "auto",
  },
  padding: {
    top: 20,
    bottom: 20,
  },
  automaticLayout: true,
};

const CodeEditor: FC<MonacoEditorProps> = (props) => {
  const { code, onChange, language, theme, options = {} } = props;
  const { settings } = useLocalState();
  const [editor, setEditor] = useState<EditorType | null>(null);
  const vimStatusLineRef = useRef<HTMLDivElement>(null);

  useVim(editor, vimStatusLineRef);

  const handleOnMount: OnMount = useCallback((editorInstance: EditorType) => {
    setEditor(editorInstance);
  }, []);

  const handleEditorChange: OnChange = useCallback(
    (value) => {
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <div
      className={css({
        height: "100%",
        position: "relative",
      })}
    >
      <MonacoEditor
        onMount={handleOnMount}
        height="100%"
        code={code}
        language={language}
        onChange={handleEditorChange}
        theme={theme}
        options={{ ...baseOptions, ...options }}
      />
      {settings.vimMode && (
        <div
          ref={vimStatusLineRef}
          className={css({
            display: "flex",
            alignContent: "center",
            fontSize: "14px",
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingX: "20px",
            height: "30px",
            width: "100%",
            backgroundColor: "#1a1b26",
          })}
        />
      )}
    </div>
  );
};

export { CodeEditor };
