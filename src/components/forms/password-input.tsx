import React, { InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';
import { Eye } from '../../assets/icons/eye-icon';
import { EyeOff } from '../../assets/icons/eye-off-icon';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  forgotPassHelpText?: string;
  label: string;
  name: string;
  shadow?: boolean;
  forgotPageLink?: string;
  variant?: 'normal' | 'solid' | 'outline';
  error: string | undefined;
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-border-base focus:border-accent',
};

/*
{error && <p className="my-2 text-xs text-red-500">{error}</p>}
*/

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      forgotPassHelpText,
      label,
      name,
      placeholder,
      error,
      children,
      variant = 'normal',
      shadow = false,
      type = 'text',
      forgotPageLink = "",
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor={name} className="font-semibold text-sm text-accent">
            {label}
          </label>
        </div>
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? 'text' : 'password'}
            ref={ref}
            className={cn(
              'py-3 px-4 w-full rounded bg-[#FFFFFF] border-[#CED4DA] appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
              shadow && 'focus:shadow',
              variantClasses[variant],
              inputClassName
            )}
            placeholder={placeholder}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...rest}
          />
          <label
            className="absolute end-4 top-5 -mt-2 -ml-8 text-body cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <Eye className="w-6 h-5" />
            ) : (
              <EyeOff className="w-6 h-5" />
              
            )}
          </label>
        </div>
        <div className="w-full flex mt-2">
            <div className="w-1/2">
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
            <div className="w-1/2 flex justify-end">
              {forgotPageLink && forgotPassHelpText && (
                <a
                  href={forgotPageLink}
                  className="text-[12px] text-[#94A3B8] transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
                >
                  {forgotPassHelpText}
                </a>
              )}
            </div>
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
