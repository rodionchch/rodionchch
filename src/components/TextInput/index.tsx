import { onKeyDown } from "types";
import * as s from "./styles";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onKeyDown?: onKeyDown;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  onSubmit,
  onKeyDown,
  placeholder,
}) => {
  return (
    <s.TextInput>
      <s.TextInputField
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <s.TextInputButton onClick={onSubmit} />
    </s.TextInput>
  );
};

export default TextInput;
