import type {ITransaction} from "../types";
import type {DateRange} from "react-day-picker";

export const exportToCsv = (data: ITransaction[], daterange: DateRange) => {
    const csvString = [
            ["id", "Date", "Amount", "Customer", "Status"],
            ...data.map(item => [item.id, item.date.replace(",", ""), item.amount, item.customer, item.status])
        ]
        .map(row => row.join(","))
        .join("\n");

    const filename = `Transactions ${daterange.from?.toLocaleDateString()} - ${daterange.to?.toLocaleDateString()}`;

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename || "download.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}