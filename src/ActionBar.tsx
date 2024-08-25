import { FC } from "react";
import { css } from "../styled-system/css";

type Props = {
  onRun: () => void;
};

const ActionBar: FC<Props> = (props) => {
  const { onRun } = props;

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "gray.100",
      })}
    >
      <button
        onClick={onRun}
        className={css({
          backgroundColor: "blue.500",
          color: "white",
          paddingX: "4",
          paddingY: "2",
          borderRadius: "md",
          _hover: { backgroundColor: "blue.600" },
        })}
      >
        Run
      </button>
    </div>
  );
};

export default ActionBar;
