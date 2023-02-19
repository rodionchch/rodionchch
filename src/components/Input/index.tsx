import { useEffect, useRef } from "react";
import { onKeyDown } from "types";
import * as s from "./styles";

type InputProps = {
  autofocus?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  error?: boolean;
  onKeyDown?: onKeyDown;
};

const Input: React.FC<InputProps> = ({
  autofocus,
  placeholder,
  onChange,
  value,
  error,
  onKeyDown,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autofocus) {
      ref?.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (error && autofocus) {
      ref?.current?.focus();
    }
  }, [error]);

  return (
    <s.Input
      ref={ref}
      value={value}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      placeholder={placeholder}
      error={error}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
