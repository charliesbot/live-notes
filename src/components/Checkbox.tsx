import { FC } from "react";
import { css } from "../../styled-system/css";

type Props = {
  id: string;
  label: string;
  isChecked: boolean;
  onClick: (value: boolean) => void;
};

const Checkbox: FC<Props> = (props) => {
  const { id, label, isChecked, onClick } = props;

  return (
    <label
      className={css({
        display: "grid",
        gridTemplateColumns: "1em auto",
        alignItems: "center",
        gap: "18px",
        cursor: "pointer",
      })}
    >
      <input
        type="checkbox"
        name={id}
        checked={isChecked}
        onChange={(e) => onClick(e.currentTarget.checked)}
        className={css({
          appearance: "none",
          margin: 0,
          color: "currentColor",
          width: "24px",
          height: "24px",
          border: "0.15em solid currentColor",
          borderRadius: "6px",
          display: "grid",
          placeContent: "center",
          _checked: {
            _before: {
              transform: "scale(1)",
            },
          },
          _before: {
            content: '""',
            width: "10px",
            height: "10px",
            fontSize: "16px",
            clipPath:
              "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
            transform: "scale(0)",
            transition: "120ms transform ease-in-out",
            backgroundColor: "CanvasText",
          },
        })}
      />
      {label}
    </label>
  );
};

export { Checkbox };
