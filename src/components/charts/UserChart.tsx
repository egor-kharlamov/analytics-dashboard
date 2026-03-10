import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type {IUsersDataPoint} from "../../types";
import type {FC} from "react";
import {ChartsSkeleton} from "../skeleton/ChartsSkeleton.tsx";

interface IUserChart {
    data: IUsersDataPoint[];
    isLoading: boolean;
}

export const UserChart:FC<IUserChart> = ({data, isLoading}) => {

    return (
        !isLoading ?
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date" />
                <YAxis width="auto" />
                <Tooltip />
                <Bar dataKey="users" fill="#8B5CF6" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
            </BarChart>
            :
            <ChartsSkeleton />
    );
}