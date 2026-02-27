import type {FC} from "react";

interface IStatsCard {
    title: string;
    value: string;
    change: number;
}

export const StatsCard: FC<IStatsCard> = ({title, value, change}) => {
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

    //TODO: make skeleton-loader func

    return(
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                    {title}
                </p>
                <span
                    className={`inline-flex item-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${bgcolor} ${changeColor}`}>
                    <span>{positiveNum ? "↑" : "↓"}</span>
                    <span></span>
                </span>
            </div>
            <p className="text-3xl font=bold text-gray-900 mb-3">
                {value}
            </p>
        </div>
    )
}