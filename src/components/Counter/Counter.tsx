import "./Counter.styl";

export type CounterProps = {
  variant?: "primary" | "secondary";
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: true | false;
  quantity?: string;
  pulse?: true | false;
};

const getCounterValue = (quantity: string): string => {
  if (!isNaN(Number(quantity)) && Number(quantity) > 99) {
    return "99+";
  }
  if (!isNaN(Number(quantity)) && Number(quantity) < 0) {
    return "<0";
  }
  if (quantity.length > 2) {
    return quantity.substring(0, 3);
  }
  return quantity;
};

const Counter = (props: CounterProps): JSX.Element => {
  const { variant = "primary", size = 8, stroke = true, pulse = false, quantity = "" } = props;

  return (
    <div className={`counter ${variant} size-${size} ${stroke ? "stroke" : ""} ${pulse ? "live-indicator" : ""}`} data-testid="counter">
      {size >= 16 ? <p className={`counter_value`}>{getCounterValue(quantity)}</p> : ""}
      {pulse && size <= 12 ? (
        <>
          <div className="dot" test-id="dot"></div>
          <div className="pulse one" test-id="pulse-one"></div>
          <div className="pulse two" test-id="pulse-two"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Counter;
