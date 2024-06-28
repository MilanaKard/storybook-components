import Counter, {CounterProps} from "../Counter/Counter";
import { ButtonContext } from "../Button/Button";
import { useContext } from "react";


const counterSizeFromButtonSize: Record<number, 8 | 12 | 16 | 20 | 24> = {
  "28": 16,
  "36": 20,
  "56": 24,
};

const ButtonCounter = (props: Omit<CounterProps, 'variant' | 'size'>): JSX.Element => {
  const { variant, size } = useContext(ButtonContext);
  return <Counter variant={variant} size={counterSizeFromButtonSize[size]} {...props} />;
};

export default ButtonCounter;

