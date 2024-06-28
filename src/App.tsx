import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import "./App.styl";
import { useState } from "react";
import { CounterProps } from "./components/Counter/Counter";

const testValues: CounterProps[] = [
  {
    quantity: "333",
    size: 24,
    stroke: true,
    pulse: false,
  },
  {
    quantity: "15",
    size: 20,
    stroke: false,
    pulse: false,
  },
  {
    quantity: "3",
    size: 16,
    stroke: false,
    pulse: false,
  },
  {
    quantity: "333",
    size: 12,
    stroke: false,
    pulse: true,
  },
  {
    quantity: "333",
    size: 8,
    stroke: false,
    pulse: true,
  }
];

const App = () => {
  const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);
  const [isLoadingSecondary, setIsLoadingSecondary] = useState(false);
  return (
    <main className="main">
      <Button onClick={() => { setIsLoadingPrimary(true) }} size={56} state={isLoadingPrimary ? "loading" : "enabled"}>
        <Button.Label text={"Привет! Нажми на меня"} />
        <Button.Counter stroke={false} quantity={"100"} pulse={true} />
      </Button>
      <Button onClick={() => { setIsLoadingSecondary(true) }} size={56} state={isLoadingSecondary ? "loading" : "enabled"} variant={"secondary"}>
        <Button.Label text={"Привет! Нажми на меня"} />
        <Button.Counter stroke={false} quantity={"100"} pulse={true} />
      </Button>
      <div className="counters counters-dark"> 
        {testValues.map((values, index) => <Counter key={index} variant={"secondary"} quantity={values.quantity} size={values.size} stroke={values.stroke} pulse={values.pulse} />)}
      </div>
      <div className="counters counters-light"> 
      {testValues.map((values, index) => <Counter key={index} quantity={values.quantity} size={values.size} stroke={values.stroke} pulse={values.pulse} />)}
      </div>
     
    </main>
  );
}

export default App;
