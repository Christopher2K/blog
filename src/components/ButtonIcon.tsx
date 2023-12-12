import { type ParentProps, type JSX } from "solid-js";

import { css, cx } from "@/style/css";

export type ButtonIconProps = ParentProps<
  JSX.HTMLAttributes<HTMLButtonElement>
>;

export const ButtonIcon = ({
  children,
  class: _class = "",
  ...props
}: ButtonIconProps) => {
  return (
    <button
      {...props}
      class={cx(
        css({
          padding: 2,
          borderRadius: "md",

          _hover: {
            cursor: "pointer",
            backgroundColor: "neutral.200",
          },
        }),
        _class,
      )}
    >
      {children}
    </button>
  );
};
