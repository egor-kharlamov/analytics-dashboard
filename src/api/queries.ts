import {keepPreviousData, useQuery} from "@tanstack/react-query";
import type {ISalesDataPoint, IStats, ITransaction, IUsersDataPoint} from "../types";
import {generateSalesData, generateStats, generateTransactions, generateUsersData} from "./mockData.ts";
import type {DateRange} from "react-day-picker";

export const useStats = () => useQuery<IStats>({
    queryKey: ['stats'],
    queryFn: generateStats
});

export const useSalesData = (days: DateRange) => useQuery<ISalesDataPoint[]>({
    queryKey: ['sales', days.from, days.to],
    queryFn: () => generateSalesData(days),
    placeholderData: keepPreviousData
});

export const useUsersData = (days: DateRange) => useQuery<IUsersDataPoint[]>({
    queryKey: ['users', days.from, days.to],
    queryFn: () => generateUsersData(days),
    placeholderData: keepPreviousData
});

export const useTransactions = (count: number) => useQuery<ITransaction[]>({
    queryKey: ['transactions'],
    queryFn: () => generateTransactions(count)
});