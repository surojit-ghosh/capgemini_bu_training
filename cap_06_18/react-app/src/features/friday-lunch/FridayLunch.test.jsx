import { render, screen, fireEvent } from "@testing-library/react";
import FridayLunch from "./FridayLunch";
import EventDetails from "./components/EventDetails";
import EmployeeItem from "./components/EmployeeItem";
import FilterBar from "./components/FilterBar";

const EVENT = {
  name: "Friday Team Lunch",
  venue: "Green Bowl Cafe",
  time: "1:00 PM",
  day: "Friday",
};

const employee = { id: 1, name: "Anu", team: "UI", status: "Pending" };

const BTN = { ALL: 0, GOING_FILTER: 1, NOT_GOING_FILTER: 2, PENDING_FILTER: 3, RESET: 4, EMP1_GOING: 5, EMP2_GOING: 7 };

describe("Rendering", () => {
  test("renders event details correctly", () => {
    render(<EventDetails event={EVENT} />);
    expect(screen.getByText("Friday Team Lunch")).toBeInTheDocument();
    expect(screen.getByText("Green Bowl Cafe")).toBeInTheDocument();
    expect(screen.getByText("1:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Friday")).toBeInTheDocument();
  });

  test("renders employee list with all employees", () => {
    render(<FridayLunch />);
    expect(screen.getByText(/^Anu/)).toBeInTheDocument();
    expect(screen.getByText(/^Rahul/)).toBeInTheDocument();
    expect(screen.getByText(/^Sneha/)).toBeInTheDocument();
    expect(screen.getByText(/^Kiran/)).toBeInTheDocument();
  });
});

describe("Props Testing", () => {
  test("passes employee data correctly to EmployeeItem", () => {
    render(<EmployeeItem employee={employee} onGoing={() => {}} onNotGoing={() => {}} />);
    expect(screen.getByText(/^Anu/)).toBeInTheDocument();
    expect(screen.getByText("UI")).toBeInTheDocument();
  });

  test("passes filter correctly to FilterBar", () => {
    render(<FilterBar activeFilter="Going" onFilterChange={() => {}} />);
    const goingBtn = screen.getByText("Going");
    expect(goingBtn.className).toContain("bg-neutral-900");
  });
});

describe("Event Handling", () => {
  test("clicking Going updates employee status", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.EMP1_GOING]);
    expect(screen.getByTestId("summary-going").lastChild).toHaveTextContent("1");
    expect(screen.getByTestId("summary-pending").lastChild).toHaveTextContent("3");
  });

  test("clicking Not Going updates employee status", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.EMP1_GOING + 1]); // Emp1 Not Going
    expect(screen.getByTestId("summary-not-going").lastChild).toHaveTextContent("1");
    expect(screen.getByTestId("summary-pending").lastChild).toHaveTextContent("3");
  });

  test("reset button resets all statuses to Pending", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.EMP1_GOING]);
    fireEvent.click(buttons[BTN.EMP2_GOING]);
    expect(screen.getByTestId("summary-going").lastChild).toHaveTextContent("2");
    fireEvent.click(buttons[BTN.RESET]);
    expect(screen.getByTestId("summary-pending").lastChild).toHaveTextContent("4");
  });
});

describe("Conditional Rendering", () => {
  test("filter shows only Going employees", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.EMP1_GOING]);
    fireEvent.click(buttons[BTN.EMP2_GOING]);
    fireEvent.click(buttons[BTN.GOING_FILTER]);
    expect(screen.getByText(/^Anu/)).toBeInTheDocument();
    expect(screen.getByText(/^Rahul/)).toBeInTheDocument();
    expect(screen.queryByText(/^Sneha/)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Kiran/)).not.toBeInTheDocument();
  });

  test("shows empty state when no employees match filter", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.GOING_FILTER]);
    expect(screen.getByText("no employees match this filter")).toBeInTheDocument();
  });
});

describe("Summary Validation", () => {
  test("shows correct initial counts", () => {
    render(<FridayLunch />);
    expect(screen.getByTestId("summary-total").lastChild).toHaveTextContent("4");
    expect(screen.getByTestId("summary-going").lastChild).toHaveTextContent("0");
    expect(screen.getByTestId("summary-not-going").lastChild).toHaveTextContent("0");
    expect(screen.getByTestId("summary-pending").lastChild).toHaveTextContent("4");
  });

  test("counts update after status change", () => {
    render(<FridayLunch />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[BTN.EMP1_GOING]);
    fireEvent.click(buttons[BTN.EMP2_GOING]);
    expect(screen.getByTestId("summary-going").lastChild).toHaveTextContent("2");
    expect(screen.getByTestId("summary-pending").lastChild).toHaveTextContent("2");
  });
});
