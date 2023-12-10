import { type ParentProps, type JSX } from "solid-js";

import { css } from "@/style/css";

export type ButtonIconProps = ParentProps<
  JSX.HTMLAttributes<HTMLButtonElement>
>;

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return (
    <button
      {...props}
      class={css({
        padding: 2,
        borderRadius: "md",

        _hover: {
          cursor: "pointer",
          backgroundColor: "neutral.200",
        },
      })}
    >
      {children}
    </button>
  );
};
