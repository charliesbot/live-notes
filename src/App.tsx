import { useState } from "react";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import CodeEditor from "./CodeEditor";
import ActionBar from "./ActionBar";
import { css } from "../styled-system/css";
import ResultsView from "./ResultsView";
import { javascript } from "@codemirror/lang-javascript";
import runJavascript from "./runners/javascriptRunner";

const theme = tokyoNight;
const language = [javascript()];

function App() {
  const [code, setCode] = useState("");
  const [results, setResults] = useState<(string | undefined)[]>([]);

  const handleRun = () => {
    // console.log("Run button clicked. Code:", code);
    let a = runJavascript(code);
    console.log("Results from runJavascript:", a);
    setResults(a);
  };

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        width: "100vw",
      })}
    >
      <div
        className={css({
          gridColumn: "1 / -1",
        })}
      >
        <ActionBar onRun={handleRun} />
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
          language={language}
        />
      </div>
      <div
        className={css({
          backgroundColor: "white",
        })}
      >
        <ResultsView theme={theme} language={language} runResults={results} />
      </div>
    </div>
  );
}

export default App;
