import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { EditorTheme } from "../types/CodeEditorTypes";
import { EditorFont } from "../configs/fontOptions";

type Settings = {
  vimMode: boolean;
  theme: EditorTheme;
  font: EditorFont;
};

const defaultSettings: Settings = {
  vimMode: false,
  theme: "tokyo-night",
  font: "jetbrains-mono",
};

type LocalStateContextType = {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
};

type Props = {
  children: ReactNode;
};

const LOCAL_STORAGE_SETTINGS_KEY = "playgroundSettings";

const LocalStateContext = createContext<LocalStateContextType | undefined>(
  undefined
);

export const LocalStateProvider: FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const storedSettings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
    return storedSettings ? JSON.parse(storedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => {
    setSettings((prevSettings: Settings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <LocalStateContext.Provider value={{ settings, updateSetting }}>
      {children}
    </LocalStateContext.Provider>
  );
};

export const useLocalState = (): LocalStateContextType => {
  const context = useContext(LocalStateContext);
  if (!context) {
    throw new Error("useLocalState must be used within a LocalStateProvider");
  }
  return context;
};

export { LocalStateContext };
