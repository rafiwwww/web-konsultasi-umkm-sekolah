import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import "react-day-picker/dist/style.css";

interface DateRangePickerProps {
  startDate?: string;
  endDate?: string;
  onChange: (startDate: string, endDate: string) => void;
  placeholder?: string;
}

export function DateRangePicker({ startDate, endDate, onChange, placeholder = "Select date range" }: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>(() => {
    const from = startDate ? new Date(startDate) : undefined;
    const to = endDate ? new Date(endDate) : undefined;

    if (!from) {
      return undefined;
    }

    return { from, to };
  });

  const handleSelect = (selectedRange: DateRange | undefined) => {
    setRange(selectedRange);
  };

  const handleApply = () => {
    if (range?.from && range.to) {
      onChange(format(range.from, "yyyy-MM-dd"), format(range.to, "yyyy-MM-dd"));
      setIsOpen(false);
    } else if (range?.from) {
      // If only start date is selected, use it as both start and end
      onChange(format(range.from, "yyyy-MM-dd"), format(range.from, "yyyy-MM-dd"));
      setIsOpen(false);
    }
  };

  const displayValue = () => {
    if (startDate && endDate) {
      return `${format(new Date(startDate), "dd MMM yyyy")} - ${format(new Date(endDate), "dd MMM yyyy")}`;
    }
    return placeholder;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between text-left"
      >
        <span className={startDate && endDate ? "text-gray-900" : "text-gray-500"}>{displayValue()}</span>
        <Calendar className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Calendar Popover */}
          <div className="absolute z-20 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-in slide-in-from-top-2 duration-100">
            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleSelect}
              className="rdp-custom"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md inline-flex items-center justify-center",
                day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
                day_today: "bg-gray-100 text-gray-900",
                day_outside: "text-gray-400 opacity-50",
                day_disabled: "text-gray-400 opacity-50",
                day_range_middle: "aria-selected:bg-blue-100 aria-selected:text-blue-900 rounded-none",
                day_hidden: "invisible",
                day_range_start: "rounded-l-md",
                day_range_end: "rounded-r-md",
              }}
            />

            {/* Apply Button */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={handleApply}
                disabled={!range?.from}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface MonthPickerProps {
  value?: string;
  onChange: (month: string) => void;
  placeholder?: string;
}

export function MonthPicker({ value, onChange, placeholder = "Select month" }: MonthPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value + "-01") : undefined
  );

  const handleMonthSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      onChange(format(date, "yyyy-MM"));
      setIsOpen(false);
    }
  };

  const displayValue = () => {
    if (value) {
      return format(new Date(value + "-01"), "MMMM yyyy");
    }
    return placeholder;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between text-left"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>{displayValue()}</span>
        <Calendar className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Calendar Popover */}
          <div className="absolute z-20 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-in slide-in-from-top-2 duration-100">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleMonthSelect}
              className="rdp-custom"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md inline-flex items-center justify-center",
                day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
                day_today: "bg-gray-100 text-gray-900",
                day_outside: "text-gray-400 opacity-50",
                day_disabled: "text-gray-400 opacity-50",
                day_range_middle: "aria-selected:bg-blue-100 aria-selected:text-blue-900",
                day_hidden: "invisible",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
