import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.mouseUp(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with correct text", () => {
    render(
      <Button onClick={vi.fn()}>
        <Button.Label text="Hello, world!" />
      </Button>
    );
    const button = screen.getByRole("button", {
      name: /Hello, world/i,
    }) as HTMLButtonElement;
    expect(button).toBeInTheDocument();
  });

  test("renders counter with the same variant class", () => {
    render(
      <Button variant="secondary" onClick={vi.fn()}>
        <Button.Counter />
      </Button>
    );
    const button = screen.getByRole("button");
    const counterElement = screen.getByTestId("counter");
    expect(button).toHaveClass("secondary");
    expect(counterElement).toHaveClass("secondary");
  });

  test("renders counter with correct size class", () => {
    render(
      <>
        <Button size={56} onClick={vi.fn()}>
          <Button.Counter />
        </Button>
        <Button size={36} onClick={vi.fn()}>
          <Button.Counter />
        </Button>
        <Button size={28} onClick={vi.fn()}>
          <Button.Counter />
        </Button>
      </>
    );
    const counterElements = screen.getAllByTestId("counter");
    expect(counterElements[0]).toHaveClass("size-24");
    expect(counterElements[1]).toHaveClass("size-20");
    expect(counterElements[2]).toHaveClass("size-16");
  });

  test("renders Loader when state is loading", () => {
    render(
      <Button state="loading" onClick={() => {}}>
        <Button.Label text="Hello, world!" />
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("loading");
  });
});
