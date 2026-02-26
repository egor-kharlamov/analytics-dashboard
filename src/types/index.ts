export interface IStats {
    revenue: number;
    revenueChange: number;
    users: number;
    usersChange: number;
    orders: number;
    ordersChange: number;
    conversion: number;
    conversionChange: number;
}

export interface ISalesDataPoint {
    date: string;
    sales: number;
}

export interface IUsersDataPoint {
    date: string;
    users: number;
}

export interface ITransaction {
    id: string;
    date: string;
    customer: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
}