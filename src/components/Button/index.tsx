import * as s from "./styles";

type ButtonProps = {
  children?: string;
  onClick?: () => void;
  small?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, small }) => {
  return (
    <s.Button small={small} onClick={onClick}>
      {children}
    </s.Button>
  );
};

export default Button;
