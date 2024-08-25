import React, { useState } from "react";
import Calendar from "./Calendar";
import { CalendarEvent } from "./types";

const TestHarness: React.FC = () => {
	const [lastClickedEvent, setLastClickedEvent] =
		useState<CalendarEvent | null>(null);
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	const handleEventClick = (event: CalendarEvent) => {
		setLastClickedEvent(event);
	};

	const handleDateChange = (date: Date) => {
		setCurrentDate(date);
	};

	return (
		<div>
			<h1>Calendar Test Harness</h1>
			<Calendar
				onEventClick={handleEventClick}
				onDateChange={handleDateChange}
				customStyles={{
					container: "border border-gray-300 rounded",
					header: "bg-blue-100",
				}}
			/>
			<div className="mt-4">
				<h2>Debug Info:</h2>
				<p>Current Date: {currentDate.toDateString()}</p>
				<p>
					Last Clicked Event:{" "}
					{lastClickedEvent
						? JSON.stringify(lastClickedEvent)
						: "None"}
				</p>
			</div>
		</div>
	);
};

export default TestHarness;
