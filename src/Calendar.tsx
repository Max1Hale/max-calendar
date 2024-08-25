import React, { useState } from "react";
import DayView from "./views/DayView";
import WeekView from "./views/WeekView";
import MonthView from "./views/MonthView";
import Header from "./components/Header";
import { ViewType, CalendarProps, CalendarEvent } from "./types";

const Calendar: React.FC<CalendarProps> = ({
	initialView = "week",
	initialDate = new Date(),
	onEventClick,
	onDateChange,
	customStyles = {},
}) => {
	const [currentView, setCurrentView] = useState<ViewType>(initialView);
	const [currentDate, setCurrentDate] = useState<Date>(initialDate);

	const handleViewChange = (newView: ViewType) => {
		setCurrentView(newView);
	};

	const handleDateChange = (newDate: Date) => {
		setCurrentDate(newDate);
		if (onDateChange) {
			onDateChange(newDate);
		}
	};

	return (
		<div
			className={`calendar-container ${customStyles.container || ""}`}
			data-testid="calendar-container"
		>
			<Header
				currentView={currentView}
				currentDate={currentDate}
				onViewChange={handleViewChange}
				onDateChange={handleDateChange}
				customStyles={customStyles.header}
			/>
			<div
				className={`view-container ${customStyles.viewContainer || ""}`}
				data-testid="view-container"
			>
				{currentView === "day" && (
					<DayView
						date={currentDate}
						onEventClick={onEventClick}
						data-testid="day-view"
					/>
				)}
				{currentView === "week" && (
					<WeekView
						date={currentDate}
						onEventClick={onEventClick}
						data-testid="week-view"
					/>
				)}
				{currentView === "month" && (
					<MonthView
						date={currentDate}
						onEventClick={onEventClick}
						data-testid="month-view"
					/>
				)}
			</div>
		</div>
	);
};

export default Calendar;
