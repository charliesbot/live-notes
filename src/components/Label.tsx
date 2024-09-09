import { FC, ReactNode } from "react";
import { css } from "../../styled-system/css";

type Props = {
  htmlFor: string;
  children: ReactNode;
};

const Label: FC<Props> = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={css({
        fontSize: 16,
        fontWeight: "bold",
      })}
    >
      {children}
    </label>
  );
};

export { Label };
