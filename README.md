# max-calendar

A customizable calendar/planner similar to Google Calendar, styled with Tailwind CSS.

## Installation

npm install max-calendar

## Usage

```
jsx
import React from 'react';
import { Calendar } from 'max-calendar';
const MyComponent = () => {
const handleEventClick = (event) => {
console.log('Event clicked:', event);
};
const handleDateChange = (date) => {
console.log('Date changed:', date);
};
const customStyles = {
container: 'bg-gray-100',
header: 'bg-blue-500 text-white',
viewContainer: 'bg-white shadow-lg',
};
return (
<Calendar
initialView="week"
initialDate={new Date()}
onEventClick={handleEventClick}
onDateChange={handleDateChange}
customStyles={customStyles}
/>
);
};
export default MyComponent;
```

Make sure to include Tailwind CSS in your project for styling.

## Props

| Prop         | Type                           | Default    | Description                                          |
| ------------ | ------------------------------ | ---------- | ---------------------------------------------------- |
| initialView  | 'day' \| 'week' \| 'month'     | 'week'     | The initial view to display                          |
| initialDate  | Date                           | new Date() | The initial date to display                          |
| onEventClick | (event: CalendarEvent) => void | undefined  | Callback function when an event is clicked           |
| onDateChange | (date: Date) => void           | undefined  | Callback function when the displayed date changes    |
| customStyles | object                         | {}         | Custom CSS classes for various parts of the calendar |

## Customization

You can customize the appearance of the calendar by passing custom CSS classes through the `customStyles` prop:

jsx
const customStyles = {
container: 'bg-gray-100',
header: 'bg-blue-500 text-white',
viewContainer: 'bg-white shadow-lg',
};

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Build the project: `npm run build`

## License

This project is licensed under the MIT License.
