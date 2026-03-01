import {type FC, useEffect, useState} from "react";
import type {ITransaction} from "../../types";
import {Dropdown} from "../ui/Dropdown.tsx";

interface ITransactionsArr {
    data: ITransaction[]
}

export const Transactions:FC<ITransactionsArr> = ({data}) => {
    const [sortedData, setSortedData] = useState<ITransaction[]>(data);
    const [sortDirection, setSortDirection] = useState("");

    const statusColor = (status: string) => {
        if (status === "completed") return  "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20"
        if (status === "pending") return "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20"
        if (status === "failed") return  "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10"
    }

    const sortTable = () => {
        const direction = sortDirection === "asc" ? "desc" : "asc";
        const sortedDataByDate = [...data].sort((a,b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (dateA > dateB) return direction === "asc" ? -1 : 1;
            if (dateA < dateB) return direction === "asc" ? 1 : -1;
            return 0
        })
        setSortedData(sortedDataByDate)
        setSortDirection(direction)
    }

    useEffect(() => {
        setSortedData(data);
    }, [data]);

    useEffect(() => {
        setSortDirection("");
    }, []);

    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                        id
                    </th>
                    <th onClick={sortTable} scope="col" className="px-6 py-3 font-medium hover:cursor-pointer">
                        Date
                        {sortDirection !== "" ?
                            <span> {sortDirection === "asc" ? "⯅" : "⯆"}</span> : <></>
                        }
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        <Dropdown />
                    </th>
                </tr>
                </thead>
                <tbody>
                    {sortedData && sortedData.length > 0 ? sortedData.map(transItem =>
                        <tr key={transItem.id} className="bg-neutral-primary border-b border-default">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                {transItem.id}
                            </th>
                            <td className="px-6 py-4">
                                {transItem.date}
                            </td>
                            <td className="px-6 py-4">
                                {transItem.amount}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={statusColor(transItem.status)}>
                                    {transItem.status}
                                </span>
                            </td>
                        </tr>
                    ) : <></>}
                </tbody>
            </table>
        </div>
    )
}