import type { ButtonProps } from "../types/button";


const Button = ({ icon, children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg p-2 ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
