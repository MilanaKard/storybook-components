import { createContext, useMemo, useState } from "react";
import "./Button.styl";
import Loader from "../Loader/Loader";
import Label from "../Label/Label";
import ButtonCounter from "../ButtonCounter/ButtonCounter";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: 28 | 36 | 56;
  state?: "enabled" | "loading" | "disabled";
  onClick: () => void;
};

type ButtonContextProps = {
  variant: "primary" | "secondary";
  size: 28 | 36 | 56;
};

export const ButtonContext = createContext<ButtonContextProps>({ variant: "primary", size: 36 });

const Button = (props: React.PropsWithChildren<ButtonProps>): JSX.Element => {
  const { variant = "primary", size = 36, state = "enabled", onClick, children } = props;
  const [clickOverlayStyle, setClickOverlayStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [isPressed, setIsPressed] = useState(false);

  const contextValue = useMemo(() => ({ variant, size }), [variant, size]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(size, 2)) / 10;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickOverlayStyle({ left: x, top: y, width, height: width });
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    onClick();
  };

  return (
    <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`button ${variant} size-${size} ${state}`}>
      <ButtonContext.Provider value={contextValue}>
        <div className="button_content">{children}</div>
      </ButtonContext.Provider>
      {isPressed && <span className="button_click-overlay" style={clickOverlayStyle}></span>}
      <div className={`button_overlay ${state === "loading" ? "shimmer_overlay" : ""}`}></div>
      <Loader />
    </button>
  );
};

Button.Label = Label;
Button.Counter = ButtonCounter;

export default Button;
