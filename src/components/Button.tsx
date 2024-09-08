import { FC } from "react";
import { css } from "../../styled-system/css";

type Props = {
  text: string;
};

const Button: FC<Props> = (props) => {
  const { text } = props;

  return (
    <button
      className={css({
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
      })}
    >
      {text}
    </button>
  );
};

export { Button };
