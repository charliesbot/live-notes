type EvaluationResult = (string | undefined)[];

function runJavascript(code: string): EvaluationResult {
  const lines = code.split("\n");
  const results: EvaluationResult = new Array(lines.length).fill(undefined);

  // Wrap each console.log with a line number
  const wrappedCode = lines
    .map((line, index) =>
      line.replace(/console\.log\((.*)\)/g, `customLog(${index}, $1)`),
    )
    .join("\n");

  const customLog = (lineIndex: number, ...args: any[]) => {
    results[lineIndex] = args
      .map((arg) =>
        typeof arg === "object" ? JSON.stringify(arg) : String(arg),
      )
      .join(" ");
  };

  try {
    // Execute the wrapped code
    new Function("customLog", wrappedCode)(customLog);
  } catch (error: any) {
    console.error("Execution error:", error);
    results[results.length - 1] = `Error: ${error.message}`;
  }

  return results;
}

export default runJavascript;