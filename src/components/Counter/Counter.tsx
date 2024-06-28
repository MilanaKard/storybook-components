import "./Counter.styl";

export type CounterProps = {
  variant?: "primary" | "secondary"; 
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: true | false;
  quantity?: string;
  pulse?: true | false;
};


const Counter = (props: CounterProps): JSX.Element => {
  const { variant  ="primary", size = 8, stroke = true, pulse = false, quantity = '' } = props;
 
  let value = quantity;
  if (quantity.length > 2) {
    if (!isNaN(Number(quantity)) && Number(quantity) > 99) {
      value = "99+";
    } else {
      value = quantity.substring(0, 3);
    }
  }

  return (
    <div className={`counter ${variant} size-${size} ${stroke ? "stroke" : ""} ${pulse ? "live-indicator" : ""}`}>
      {size >= 16 ? <p className={`counter_value`}>{value}</p> : ""}
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
