import { FC } from "react";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { css } from "../styled-system/css";

type Props = {
  theme: Extension;
  runResults: (string | undefined)[];
  language: Extension[];
};

const ResultsView: FC<Props> = (props) => {
  const { theme, runResults, language } = props;
  const resultsText = runResults
    .map((result) => (result !== undefined ? result : ""))
    .join("\n");

  return (
    <CodeMirror
      value={resultsText}
      editable={false}
      theme={theme}
      extensions={language}
      height="100%"
      className={css({ height: "100%" })}
    />
  );
};

export default ResultsView;
