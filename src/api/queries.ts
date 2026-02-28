import {useQuery} from "@tanstack/react-query";
import type {ISalesDataPoint, IStats, ITransaction, IUsersDataPoint} from "../types";
import {generateSalesData, generateStats, generateTransactions, generateUsersData} from "./mockData.ts";

export const useStats = () => useQuery<IStats>({
    queryKey: ['stats'],
    queryFn: generateStats
});

export const useSalesData = (days: number) => useQuery<ISalesDataPoint[]>({
    queryKey: ['sales'],
    queryFn: () => generateSalesData(days)
});

export const useUsersData = (days: number) => useQuery<IUsersDataPoint[]>({
    queryKey: ['users'],
    queryFn: () => generateUsersData(days)
});

export const useTransactions = (count: number) => useQuery<ITransaction[]>({
    queryKey: ['transactions'],
    queryFn: () => generateTransactions(count)
});