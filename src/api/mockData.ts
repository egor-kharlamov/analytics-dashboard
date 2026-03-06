import type {ISalesDataPoint, IStats, ITransaction, IUsersDataPoint} from "../types";
import type {DateRange} from "react-day-picker";

export const generateStats = (): Promise<IStats> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentRevenue = 125430;
            const currentUsers = 8426;
            const currentOrders = 1245;
            const currentConversion = 3.2;

            const previousRevenue = currentRevenue / (1 + (Math.random() * 0.4 - 0.2));
            const previousUsers = currentUsers / (1 + (Math.random() * 0.4 - 0.2));
            const previousOrders = currentOrders / (1 + (Math.random() * 0.4 - 0.2));
            const previousConversion = currentConversion / (1 + (Math.random() * 0.4 - 0.2));

            const calculateChange = (current: number, previous: number) => {
                return Number((((current - previous) / previous) * 100).toFixed(1));
            };

            resolve({
                revenue: currentRevenue,
                revenueChange: calculateChange(currentRevenue, previousRevenue),
                users: currentUsers,
                usersChange: calculateChange(currentUsers, previousUsers),
                orders: currentOrders,
                ordersChange: calculateChange(currentOrders, previousOrders),
                conversion: currentConversion,
                conversionChange: calculateChange(currentConversion, previousConversion)
            });
        }, 500);
    });
};

export const generateSalesData = (days: DateRange): Promise<ISalesDataPoint[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data: ISalesDataPoint[] = [];

            const sd = days?.from;
            const ed = days?.to;

            for (let i = sd!.getDate() - 1; i <= ed!.getDate() - 1; i++) {
                const date = new Date(ed!.getFullYear(), ed!.getMonth(), i);

                data.push({
                    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    sales: Math.floor(Math.random() * 10000) + 5000,
                });
            }

            resolve(data);
        }, 700);
    });
};

export const generateUsersData = (days: DateRange): Promise<IUsersDataPoint[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data: IUsersDataPoint[] = [];
            const sd = days?.from;
            const ed = days?.to;

            for (let i = sd!.getDate() - 1; i <= ed!.getDate() - 1; i++) {
                const date = new Date(ed!.getFullYear(), ed!.getMonth(), i);

                data.push({
                    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    users: Math.floor(Math.random() * 10000) + 5000,
                });
            }

            resolve(data);
        }, 700);
    });
};


export const generateTransactions = (count: number): Promise<ITransaction[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const statuses: ITransaction['status'][] = ['completed', 'pending', 'failed'];
            const names = [
                'John Doe',
                'Jane Smith',
                'Bob Johnson',
                'Alice Williams',
                'Charlie Brown',
                'Sarah Davis',
                'Mike Wilson',
                'Emily Taylor'
            ];

            const transactions: ITransaction[] = [];

            for (let i = 0; i < count; i++) {
                const date = new Date();
                date.setDate(date.getDate() - Math.floor(Math.random() * 30));

                transactions.push({
                    id: `TXN-${1000 + i}`,
                    date: date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    }),
                    customer: names[Math.floor(Math.random() * names.length)],
                    amount: Math.floor(Math.random() * 5000) + 100,
                    status: statuses[Math.floor(Math.random() * statuses.length)],
                });
            }

            resolve(transactions);
        }, 600);
    });
};