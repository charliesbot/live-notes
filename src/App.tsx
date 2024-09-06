import { useEffect, useRef, useState } from "react";
import { useMonaco } from "@monaco-editor/react";
import ActionBar from "./ActionBar";
import { css } from "../styled-system/css";
import runJavascript from "./runners/javascriptRunner";
import { SettingsDialog } from "./SettingsDialog";
import { resultsViewEditorConfig } from "./configs/resultsViewEditorConfig";
import MonacoEditor from "./components/MonacoEditor";
import { EditorTheme } from "./types/CodeEditorTypes";
import { tokyoNightTheme } from "./themes/tokyoNight";
// import { useLocalState } from "./context/LocalState";

function App() {
  const [code, setCode] = useState<string | undefined>("");
  const [results, setResults] = useState<string | undefined>();
  const settingsDialogRef = useRef<HTMLDialogElement>(null);
  const theme: EditorTheme = "tokyo-night";
  const language = "typescript";
  const monaco = useMonaco();
  // const { settings } = useLocalState();

  useEffect(() => {
    // TODO - convert this into a theme hook
    if (monaco) {
      monaco.editor.defineTheme("tokyo-night", tokyoNightTheme);
      monaco.editor.setTheme("tokyo-night");
    }
  }, [monaco]);

  const handleRun = () => {
    console.log(code);
    const resultsText = runJavascript(code)
      .map((result) => (result !== undefined ? result : ""))
      .join("\n");
    setResults(resultsText);
  };

  const openSettings = () => {
    settingsDialogRef.current?.showModal();
  };

  return (
    <>
      <div
        className={css({
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gridTemplateColumns: "1fr 1fr",
          height: "100vh",
          width: "100vw",
          position: "relative",
        })}
      >
        <div
          className={css({
            gridColumn: "1 / -1",
          })}
        >
          <ActionBar onRun={handleRun} onOpenSettings={openSettings} />
        </div>
        <div
          className={css({
            gridColumn: "0",
            gridRow: "2",
            overflow: "hidden",
          })}
        >
          <MonacoEditor
            code={code}
            onChange={setCode}
            theme={theme}
            language={language}
          />
        </div>
        <div
          className={css({
            gridColumn: "1",
            gridRow: "2",
            overflow: "hidden",
          })}
        >
          <MonacoEditor
            code={results}
            theme={theme}
            language={language}
            options={resultsViewEditorConfig}
          />
        </div>
      </div>
      <SettingsDialog dialogRef={settingsDialogRef} />
    </>
  );
}

export default App;
