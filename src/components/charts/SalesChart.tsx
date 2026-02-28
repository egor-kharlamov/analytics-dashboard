import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type {FC} from "react";
import type {ISalesDataPoint} from "../../types";


interface ISalesChart {
    data: ISalesDataPoint[]
}

export const SalesChart:FC<ISalesChart> = ({data}) => {
    return (
        <LineChart
            style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis width="auto" />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3B82F6" activeDot={{ r: 8 }} />
        </LineChart>
    );
}