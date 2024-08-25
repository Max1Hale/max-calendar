import React from "react";
import { ViewType } from "../types";

interface HeaderProps {
	currentView: ViewType;
	currentDate: Date;
	onViewChange: (view: ViewType) => void;
	onDateChange: (date: Date) => void;
	customStyles?: string;
}

const Header: React.FC<HeaderProps> = ({
	currentView,
	currentDate,
	onViewChange,
	onDateChange,
	customStyles,
}) => {
	const handleViewChange = (view: ViewType) => {
		onViewChange(view);
	};

	const handleDateChange = (direction: "prev" | "next") => {
		const newDate = new Date(currentDate);
		if (direction === "prev") {
			newDate.setDate(newDate.getDate() - 1);
		} else {
			newDate.setDate(newDate.getDate() + 1);
		}
		onDateChange(newDate);
	};

	return (
		<div className={`calendar-header ${customStyles || ""}`}>
			<div className="view-buttons">
				<button onClick={() => handleViewChange("day")}>Day</button>
				<button onClick={() => handleViewChange("week")}>Week</button>
				<button onClick={() => handleViewChange("month")}>Month</button>
			</div>
			<div className="date-navigation">
				<button onClick={() => handleDateChange("prev")}>
					Previous
				</button>
				<span>{currentDate.toDateString()}</span>
				<button onClick={() => handleDateChange("next")}>Next</button>
			</div>
		</div>
	);
};

export default Header;
