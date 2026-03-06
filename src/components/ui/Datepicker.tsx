import { useState, useRef, useEffect } from "react";
import {DayPicker, type DateRange, getDefaultClassNames} from "react-day-picker";

export const Datepicker = () => {
    const [selectedRange, setSelectedRange] = useState<DateRange>();
    const [inputValue, setInputValue] = useState<DateRange | undefined>();
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState<number>(0);
    const popoverRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    };

    const displayValue =
        inputValue?.from && inputValue?.to
            ? `${inputValue.from.toLocaleDateString()} - ${inputValue.to.toLocaleDateString()}`
            : '';

    const handleSelect = (range: DateRange | undefined) => {
        const clicked:number = click;
        setSelectedRange(range);
        setInputValue(range);

        if (click == 0) {
            setClick(clicked + 1)
        } else if (click == 1) {
            setIsOpen(false);
            setClick(0);
        }
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const defaultClassNames = getDefaultClassNames();

    return (
        <div className="relative">
            <input
                ref={inputRef}
                type="text"
                value={displayValue}
                onChange={handleInputChange}
                onClick={() => setIsOpen(true)}
                placeholder="Choose period"
                className='border border-gray-300 rounded-md p-2'
                readOnly
            />
            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute top-full left-0 mt-1 z-10 bg-white shadow-lg rounded"
                >
                    <DayPicker
                        mode="range"
                        selected={selectedRange}
                        onSelect={handleSelect}
                        classNames={{
                            today: `border-amber-500`,
                            selected: `bg-amber-500 border-amber-500`,
                            root: `${defaultClassNames.root} p-5 w-auto`,
                            chevron: `${defaultClassNames.chevron} fill-amber-500`,
                        }}
                    />
                </div>
            )}
        </div>
    );
};