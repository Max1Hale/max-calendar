import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "../Calendar";
import { ViewType } from "../types";

describe("Calendar", () => {
	const mockOnEventClick = jest.fn();
	const mockOnDateChange = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders with default props", () => {
		render(<Calendar />);
		expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
		expect(screen.getByTestId("view-container")).toBeInTheDocument();
	});

	it("renders with custom initial view", () => {
		render(<Calendar initialView="month" />);
		expect(screen.getByTestId("view-container")).toContainElement(
			screen.getByTestId("month-view")
		);
	});

	it("changes view when header buttons are clicked", () => {
		render(<Calendar />);
		const dayViewButton = screen.getByRole("button", { name: "Day" });
		fireEvent.click(dayViewButton);
		expect(screen.getByTestId("view-container")).toContainElement(
			screen.getByTestId("day-view")
		);
	});

	it("calls onDateChange when date is changed", () => {
		render(<Calendar onDateChange={mockOnDateChange} />);
		const nextButton = screen.getByRole("button", { name: "Next" });
		fireEvent.click(nextButton);
		expect(mockOnDateChange).toHaveBeenCalled();
	});

	it("applies custom styles", () => {
		const customStyles = {
			container: "custom-container",
			viewContainer: "custom-view-container",
		};
		render(<Calendar customStyles={customStyles} />);
		expect(screen.getByTestId("calendar-container")).toHaveClass(
			"custom-container"
		);
		expect(screen.getByTestId("view-container")).toHaveClass(
			"custom-view-container"
		);
	});
});
