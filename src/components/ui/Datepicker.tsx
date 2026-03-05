import { useState, useRef, useEffect } from "react";
import {DayPicker, type DateRange, getDefaultClassNames} from "react-day-picker";
import { parse, isValid } from "date-fns";

export const Datepicker = () => {
    const [selectedRange, setSelectedRange] = useState<DateRange>();
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
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
        setInputValue(e.target.value);
        const parsed = parse(e.target.value, "MM/dd/yyyy", new Date());
        if (isValid(parsed)) {
            setSelectedRange({ from: parsed, to: parsed }); // для range
        } else {
            setSelectedRange(undefined);
        }
    };

    // const handleSelect = (range: DateRange | undefined) => {
    //     setSelectedRange(range);
    //     if (range?.from) {
    //         setInputValue(format(range.from, "MM/dd/yyyy"));
    //     }
    //     setIsOpen(false);
    // };

    const defaultClassNames = getDefaultClassNames();


    return (
        <div className="relative">
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={() => setIsOpen(true)}
                placeholder="MM/dd/yyyy"
            />
            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute top-full left-0 mt-1 z-10 bg-white shadow-lg rounded"
                >
                    <DayPicker
                        mode="range"
                        selected={selectedRange}
                        onSelect={setSelectedRange}
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