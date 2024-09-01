import { useEffect, useRef, useState } from "react";
import { Extension } from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { javascript } from "@codemirror/lang-javascript";
import { linter, lintGutter } from "@codemirror/lint";
import { autocompletion } from "@codemirror/autocomplete";
import { vim } from "@replit/codemirror-vim";
import CodeEditor from "./CodeEditor";
import ActionBar from "./ActionBar";
import { css } from "../styled-system/css";
import ResultsView from "./ResultsView";
import runJavascript from "./runners/javascriptRunner";
import { SettingsDialog } from "./SettingsDialog";
import { useLocalState } from "./context/LocalState";

const theme = tokyoNight;
const language = javascript({ typescript: true });

function App() {
  const [code, setCode] = useState("");
  const [results, setResults] = useState<(string | undefined)[]>([]);
  const settingsDialogRef = useRef<HTMLDialogElement>(null);
  const { settings } = useLocalState();
  const [extensions, setExtensions] = useState<Extension[]>([
    language,
    lintGutter(),
    autocompletion(),
  ]);

  useEffect(() => {
    const tempExtensions: Extension[] = [language];
    if (settings.vimMode) {
      tempExtensions.push(vim());
    }
    setExtensions([...tempExtensions]);
  }, [settings]);

  const handleRun = () => {
    setResults(runJavascript(code));
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
            backgroundColor: "gray.50",
          })}
        >
          <CodeEditor
            code={code}
            onChange={setCode}
            theme={theme}
            extensions={extensions}
          />
        </div>
        <div
          className={css({
            backgroundColor: "white",
          })}
        >
          <ResultsView
            theme={theme}
            extensions={[language]}
            runResults={results}
          />
        </div>
      </div>
      <SettingsDialog dialogRef={settingsDialogRef} />
    </>
  );
}

export default App;
