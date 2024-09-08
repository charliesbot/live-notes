declare module "monaco-vim" {
  export interface EditorVimMode {
    dispose: () => void;
    on: (
      event: "vim-mode-change",
      callback: (args: { mode: string }) => void
    ) => void;
  }

  type initVimModeFn = (
    editor: monaco.editor.IStandaloneCodeEditor,
    statusElm: HTMLElement
  ) => EditorVimMode;

  const initVimMode: initVimModeFn;
  export { initVimMode };

  const VimMode: {
    Vim: {
      noremap: (from: string, to: string) => void;
      map: (from: string, to: string, mode: string) => void;
    };
  };
  export { VimMode };
}
