import cn from "classnames";
import React, { TextareaHTMLAttributes } from "react";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  shadow?: boolean;
  compulsory?: boolean;
  variant?: "normal" | "solid" | "outline";
}

const classes = {
  root: "py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm outline-none focus:outline-none focus:ring-0",
  normal:
    "border-[#CBD5E1] border border-border-base focus:shadow focus:bg-light focus:border-accent",
  solid:
    "border-[#CBD5E1] border border-border-100 focus:bg-light focus:border-accent",
  outline: "border-[#CBD5E1] border border-border-base focus:border-accent",
  shadow: "focus:shadow",
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    label,
    name,
    error,
    variant = "normal",
    shadow = false,
    inputClassName,
    ...rest
  } = props;

  const rootClassName = cn(
    classes.root,
    {
      [classes.normal]: variant === "normal",
      [classes.solid]: variant === "solid",
      [classes.outline]: variant === "outline",
    },
    {
      [classes.shadow]: shadow,
    },
    inputClassName
  );

  return (
    <div className={className}>
      {label && (
        <label className="block text-accent font-semibold text-sm leading-none mb-3 text-left">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={rootClassName}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows={4}
        ref={ref}
        {...rest}
      />
      {error && <p className="my-2 text-xs text-end text-red-500">{error}</p>}
    </div>
  );
});

export default TextArea;
