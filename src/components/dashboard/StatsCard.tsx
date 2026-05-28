import type {FC, ReactNode} from "react";
import {CardsSkeleton} from "../skeleton/CardsSkeleton.tsx";

interface IStatsCard {
    title: string;
    value: string;
    change: number;
    icon?: ReactNode;
    isLoading: boolean;
}

export const StatsCard: FC<IStatsCard> = ({title, value, change, icon, isLoading}) => {
    let bgcolor: string = ""
    let changeColor: string = ""
    const positiveNum = change >= 0;

    if (positiveNum) {
        bgcolor = "bg-green-50"
        changeColor = "text-green-600"
    } else {
        bgcolor = "bg-red-50"
        changeColor = "text-red-600"
    }

    return (
        !isLoading ?
            <div
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 lg:p-5 hover:shadow-md transition-shadow duration-200 min-w-0 max-w-full overflow-hidden">
                <div className="flex items-center justify-between gap-1 mb-1 lg:mb-3">
                    <div className="flex items-center gap-1 min-w-0">
                        <div className="w-4 lg:w-5 flex-shrink-0 text-gray-500">
                            {icon}
                        </div>
                        <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">
                            {title}
                        </p>
                    </div>
                    <span
                        className={`shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-xs font-semibold ${bgcolor} ${changeColor}`}>
                    <span>{positiveNum ? "↑" : "↓"}</span>
                    <span>{change}</span>
                </span>
                </div>
                <p className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 break-word">
                    {value}
                </p>
            </div>
            :
            <CardsSkeleton/>
    );
}