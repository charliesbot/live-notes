import { FC, RefObject } from "react";
import { Checkbox } from "./components/Checkbox";
import { Spacer } from "./components/Spacer";
import { useLocalState } from "./context/LocalState";
import { Dropdown } from "./components/Dropdown";
import { css } from "../styled-system/css";
import { fontOptions } from "./configs/fontOptions";
import { themeOptions } from "./configs/themeOptions";

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
      <h1
        className={css({
          fontWeight: "bold",
          fontSize: 30,
        })}
      >
        Settings
      </h1>
      <Spacer size={24} />
      <Checkbox
        id="vimMode"
        label="Enable Vim Mode"
        isChecked={settings.vimMode}
        onClick={(value: boolean) => updateSetting("vimMode", value)}
      />
      <Spacer size={24} />
      <Dropdown
        options={themeOptions}
        onChange={() => {}}
        value={settings.theme}
      />
      <Spacer size={24} />
      <Dropdown
        options={fontOptions}
        onChange={() => {}}
        value={settings.theme}
      />
    </dialog>
  );
};

export { SettingsDialog };
