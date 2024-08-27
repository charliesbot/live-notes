import { FC } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { LuHome, LuSettings } from "react-icons/lu";
import { css } from "../styled-system/css";

const gradientButtonStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 0.3s ease",
  color: "rgba(255, 255, 255, 0.8)",
  background: "linear-gradient(135deg, #FF1493, #FF69B4)",
  boxShadow: "0 2px 10px rgba(255, 20, 147, 0.5)",
});

const baseButtonStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 0.3s ease",
  background: "transparent",
  color: "rgba(255, 255, 255, 0.8)",
});

type Props = {
  onRun: () => void;
  onOpenSettings: () => void;
};

const ActionBar: FC<Props> = (props) => {
  const { onRun, onOpenSettings } = props;

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#1a1b26",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "50%",
          maxWidth: 1024,
          minWidth: 300,
          padding: "10px 20px",
          background: "rgba(40, 40, 40, 0.3)",
          backdropFilter: "blur(8px)",
          borderRadius: "30px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        })}
      >
        <button className={baseButtonStyles}>
          <LuHome size={20} />
        </button>
        <button onClick={onRun} className={gradientButtonStyles}>
          <HiMiniPlay size={20} />
        </button>
        <button onClick={onOpenSettings} className={baseButtonStyles}>
          <LuSettings size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
