import { FC, ReactNode } from "react";
import { css } from "../../styled-system/css";

type Props = {
  children: ReactNode;
};

const Column: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      {children}
    </div>
  );
};

export { Column };
