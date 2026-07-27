import { forwardRef } from "react";
import { Button } from "./button";
import type { ComponentProps } from "react";

type IconButtonProps = Omit<ComponentProps<typeof Button>, "size"> & {
  label: string;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, children, ...rest }, ref) => {
    return (
      <Button ref={ref} size="icon" aria-label={label} {...rest}>
        {children}
      </Button>
    );
  },
);
IconButton.displayName = "IconButton";