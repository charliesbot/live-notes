import { FC, RefObject } from "react";
import { Checkbox } from "./components/Checkbox";
import { Spacer } from "./components/Spacer";
import { useLocalState } from "./context/LocalState";
import { Dropdown } from "./components/Dropdown";
import { css } from "../styled-system/css";
import { EditorFont, fontOptions } from "./configs/fontOptions";
import { themeOptions } from "./configs/themeOptions";
import { Label } from "./components/Label";
import { Column } from "./components/Column";
import { IoCloseOutline } from "react-icons/io5";
import { EditorTheme } from "./types/CodeEditorTypes";

type Props = {
  dialogRef: RefObject<HTMLDialogElement>;
};

const SettingsDialog: FC<Props> = (props) => {
  const { dialogRef } = props;
  const { settings, updateSetting } = useLocalState();

  return (
    <dialog
      ref={dialogRef}
      className={css({
        position: "absolute",
        width: 500,
        minH: 500,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "zinc.900",
        boxShadow: "4px 2px 20px 0px rgba(0, 0, 0, 0.3)",
        borderRadius: "24px",
        paddingX: 12,
        paddingY: 8,
        _backdrop: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <h1
          className={css({
            fontWeight: "bold",
            fontSize: 30,
          })}
        >
          Settings
        </h1>
        <IoCloseOutline
          size={24}
          className={css({ cursor: "pointer" })}
          onClick={() => dialogRef.current?.close()}
        />
      </div>
      <Spacer size={32} />
      <Checkbox
        id="vimMode"
        label="Enable Vim Mode"
        isChecked={settings.vimMode}
        onClick={(value: boolean) => updateSetting("vimMode", value)}
      />
      <Spacer size={24} />
      <Column>
        <Label htmlFor="theme">Theme</Label>
        <Spacer size={10} />
        <Dropdown
          id="theme"
          options={themeOptions}
          onChange={(event) => {
            updateSetting("theme", event.target.value as EditorTheme);
          }}
          value={settings.theme}
        />
      </Column>
      <Spacer size={24} />
      <Column>
        <Label htmlFor="font">Font</Label>
        <Spacer size={10} />
        <Dropdown
          id="font"
          options={fontOptions}
          onChange={(event) => {
            updateSetting("font", event.target.value as EditorFont);
          }}
          value={settings.font}
        />
      </Column>
    </dialog>
  );
};

export { SettingsDialog };
