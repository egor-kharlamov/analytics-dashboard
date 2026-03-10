import './App.css'
import {Layout} from "./components/layout/Layout.tsx";
import {StatsCard} from "./components/dashboard/StatsCard.tsx";
import {useSalesData, useStats, useTransactions, useUsersData} from "./api/queries.ts";
import {SalesChart} from "./components/charts/SalesChart.tsx";
import {UserChart} from "./components/charts/UserChart.tsx";
import {Transactions} from "./components/dashboard/Transactions.tsx";
import "react-day-picker/style.css";
import {Datepicker} from "./components/ui/Datepicker.tsx";
import {useState} from "react";
import type {DateRange} from "react-day-picker";
import { UsersIcon, QueueListIcon, DocumentCurrencyDollarIcon, PercentBadgeIcon } from "@heroicons/react/16/solid"

const today = new Date();
const initialDateRangeState: DateRange = {from: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), to: new Date(today.getFullYear(), today.getMonth()+1, 0)};

function App() {
    const [dateRange, setDateRange] = useState<DateRange>(initialDateRangeState)
    const { data: stats, isLoading: isLoadStats} = useStats();
    //TODO add changeable days for below queries
    const { data: sales, isLoading: isLoadSales} = useSalesData(dateRange);
    const { data: user, isLoading: isLoadUsers} = useUsersData(dateRange);
    const { data: transactions, isLoading: isLoadTrans } = useTransactions(10)


    return (
      <Layout>
          <div className="mb-2">
            <Datepicker setDateRange={setDateRange}/>
          </div>
          <div className="grid grid-cols-4 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                  title="Revenue"
                  value={stats ? stats.revenue.toString() : ""}
                  change={stats ? stats.revenueChange : 0}
                  icon={<DocumentCurrencyDollarIcon />}
                  isLoading={isLoadStats}
              />
              <StatsCard
                  title="Users"
                  value={stats ? stats.users.toString() : ""}
                  change={stats ? stats.usersChange : 0}
                  icon={<UsersIcon />}
                  isLoading={isLoadStats}
              />
              <StatsCard
                  title="Orders"
                  value={stats ? stats.orders.toString() : ""}
                  change={stats ? stats.ordersChange : 0}
                  icon={<QueueListIcon />}
                  isLoading={isLoadStats}
              />
              <StatsCard
                  title="Rate"
                  value={stats ? stats.conversion.toString() : ""}
                  change={stats ? stats.conversionChange : 0}
                  icon={<PercentBadgeIcon />}
                  isLoading={isLoadStats}
              />
          </div>
          <div className="mt-2">
            <SalesChart data={sales ? sales : []} isLoading={isLoadSales}/>
          </div>
          <div className="mt-2">
              <UserChart data={user ? user : []} isLoading={isLoadUsers}/>
          </div>
          <div className="mt-2">
              <Transactions data={transactions ? transactions : []} isLoading={isLoadTrans}/>
          </div>
      </Layout>
    )
}

export default App
