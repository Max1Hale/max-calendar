export type ViewType = 'day' | 'week' | 'month';

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    color?: string;
}

export interface CalendarProps {
    initialView?: ViewType;
    initialDate?: Date;
    onEventClick?: (event: CalendarEvent) => void;
    onDateChange?: (date: Date) => void;
    customStyles?: {
        container?: string;
        header?: string;
        viewContainer?: string;
    };
}