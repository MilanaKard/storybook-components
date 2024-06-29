import { render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter component", () => {
  test("displays quantity if size>=16", () => {
    render(
      <>
        <Counter quantity="1" size={24} />
        <Counter quantity="2" size={20} />
        <Counter quantity="3" size={16} />
      </>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("does not display quantity if size <= 12", () => {
    render(
      <>
        <Counter size={8} quantity="1" />
        <Counter size={12} quantity="2" />
      </>
    );
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });

  test('displays "99+" if quantity is greater than 99', () => {
    render(<Counter quantity="150" size={24} />);
    const counterValue = screen.getByText("99+");
    expect(counterValue).toBeInTheDocument();
  });

  test("quantity length should not exceed 3 characters", () => {
    render(<Counter quantity="long value" size={24} />);
    const counterValue = screen.getByText(/lo/i);
    expect(counterValue.textContent!.length).toBeLessThanOrEqual(3);
  });

  test("applies the correct variant class", () => {
    render(<Counter variant="secondary" quantity="5" />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveClass("secondary");
  });
});
