import { EditorProps } from "@monaco-editor/react";
import { editor } from "monaco-editor";

export type EditorLanguage = "typescript";

export type EditorTheme = "vs-dark" | "tokyo-night";

export type EditorOptions = EditorProps["options"];

export type EditorThemeConfig = editor.IStandaloneThemeData;
