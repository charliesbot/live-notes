import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { FC } from "react";
import { css } from "../styled-system/css";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  theme: Extension;
  language: Extension[];
}

const CodeEditor: FC<CodeEditorProps> = (props) => {
  const { code, onChange, theme, language } = props;
  return (
    <div className={css({ height: "100%", overflow: "auto" })}>
      <CodeMirror
        value={code}
        height="100%"
        className={css({
          height: "100%",
          fontSize: "14px",
        })}
        theme={theme}
        onChange={onChange}
        extensions={language}
      />
    </div>
  );
};

export default CodeEditor;
