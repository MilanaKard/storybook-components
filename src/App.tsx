import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import "./App.styl";
import { useState } from "react";
import { CounterProps } from "./components/Counter/Counter";

const testValues: (CounterProps & {key: string})[] = [
  {
    quantity: "333",
    size: 24,
    stroke: true,
    pulse: false,
    key: '1'
  },
  {
    quantity: "15",
    size: 20,
    stroke: false,
    pulse: false,
    key: '2'
  },
  {
    quantity: "3",
    size: 16,
    stroke: false,
    pulse: false,
    key: '3'
  },
  {
    quantity: "333",
    size: 12,
    stroke: false,
    pulse: true,
    key: '4'
  },
  {
    quantity: "333",
    size: 8,
    stroke: false,
    pulse: true,
    key: '5'
  }
];

const App = () => {
  const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);
  const [isLoadingSecondary, setIsLoadingSecondary] = useState(false);
  return (
    <main className="main">
      <Button onClick={() => { setIsLoadingPrimary(true) }} size={56} state={isLoadingPrimary ? "loading" : "enabled"}>
        <Button.Label text={"Привет! Нажми на меня"} />
        <Button.Counter stroke={false} quantity={"100"} />
      </Button>
      <Button onClick={() => { setIsLoadingSecondary(true) }} size={56} state={isLoadingSecondary ? "loading" : "enabled"} variant="secondary">
        <Button.Label text={"Привет! Нажми на меня"} />
        <Button.Counter stroke={false} quantity={"10"} />
      </Button>
      <Button onClick={() => {}} state="disabled">
        <Button.Label text={"Привет! Нажми на меня"} />
        <Button.Counter quantity={"1"} />
      </Button>
      <div className="counters counters-dark"> 
        {testValues.map((values) => <Counter variant="secondary" {...values} />)}
      </div>
      <div className="counters counters-light"> 
      {testValues.map((values) => <Counter  {...values}/>)}
      </div>
    </main>
  );
}

export default App;
