import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, error, ...rest }, ref) => {
    return (
      <div className={className}>
        <div className="flex items-center space-x-3 ml-1">
          <input
            id={name}
            name={name}
            type="checkbox"
            ref={ref}
            className="border-secondary border scale-[1.5]"
            {...rest}
          />

          <label htmlFor={name} className="text-secondary text-[13px] max-sm:text-left">
            {label}
          </label>
        </div>

        {error && <p className="my-2 text-xs text-end text-red-500">{error}</p>}
      </div>
    );
  }
);

export default Checkbox;
