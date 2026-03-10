export const TableSkeleton = () => {
    return (
        <tr className="bg-neutral-primary border-b border-default">
            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </th>
            <td className="px-6 py-4">
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </td>
            <td className="px-6 py-4">
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </td>
            <td className="px-6 py-4">
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </td>
        </tr>
    )
}