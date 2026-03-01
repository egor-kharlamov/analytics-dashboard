import type {FC} from "react";
import type {ITransaction} from "../../types";

interface ITransactionsArr {
    data: ITransaction[]
}

export const Transactions:FC<ITransactionsArr> = ({data}) => {

    const statusColor = (status: string) => {
        if (status === "completed") return  "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20"
        if (status === "pending") return "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20"
        if (status === "failed") return  "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10"
    }

    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                        id
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? data.map(transItem =>
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