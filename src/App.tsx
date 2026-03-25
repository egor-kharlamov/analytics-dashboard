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
import {exportToCsv} from "./utils/exportToCsv.ts";

const today = new Date();
const initialDateRangeState: DateRange = {
    from: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    to: new Date(today.getFullYear(), today.getMonth()+1, 0)
};

function App() {
    const [dateRange, setDateRange] = useState<DateRange>(initialDateRangeState)
    const { data: stats, isLoading: isLoadStats, isError: isErrorStats} = useStats();
    const { data: sales, isLoading: isLoadSales, isError: isErrorSales} = useSalesData(dateRange);
    const { data: user, isLoading: isLoadUsers, isError: isErrorUsers} = useUsersData(dateRange);
    const { data: transactions, isLoading: isLoadTrans, isError: isErrorTrans } = useTransactions(10)


    return (
      <Layout>
          <div className="mb-2">
            <Datepicker setDateRange={setDateRange}/>
          </div>

          {!isErrorStats ?
              <div className="grid grid-cols-4 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <StatsCard
                      title="Revenue"
                      value={stats ? stats.revenue.toString() : ""}
                      change={stats ? stats.revenueChange : 0}
                      icon={<DocumentCurrencyDollarIcon/>}
                      isLoading={isLoadStats}
                  />
                  <StatsCard
                      title="Users"
                      value={stats ? stats.users.toString() : ""}
                      change={stats ? stats.usersChange : 0}
                      icon={<UsersIcon/>}
                      isLoading={isLoadStats}
                  />
                  <StatsCard
                      title="Orders"
                      value={stats ? stats.orders.toString() : ""}
                      change={stats ? stats.ordersChange : 0}
                      icon={<QueueListIcon/>}
                      isLoading={isLoadStats}
                  />
                  <StatsCard
                      title="Rate"
                      value={stats ? stats.conversion.toString() : ""}
                      change={stats ? stats.conversionChange : 0}
                      icon={<PercentBadgeIcon/>}
                      isLoading={isLoadStats}
                  />
              </div> :
              <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg mt-2" role="alert">
                  <p>Error loading "Stats" data, please reload page</p>
              </div>
          }
          {!isErrorSales ?
              <div className="mt-2">
                  <SalesChart data={sales ? sales : []} isLoading={isLoadSales}/>
              </div> :
              <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg mt-2" role="alert">
                  <p>Error loading "Sales" data, please reload page</p>
              </div>
          }
          {!isErrorUsers ?
              <div className="mt-2">
                  <UserChart data={user ? user : []} isLoading={isLoadUsers}/>
              </div> :
              <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg mt-2" role="alert">
                  <p>Error loading "Users" data, please reload page</p>
              </div>
          }
          {!isErrorTrans ?
              <div className="mt-2 flex flex-col">
                  <div className='flex justify-end'>
                      <button
                          className="bg-gray-100 hover:bg-black-100 font-bold py-2 px-4 mb-2 rounded border border-black"
                          onClick={() => exportToCsv(transactions!, dateRange)}
                      >
                          Download CSV
                      </button>
                  </div>
                  <div>
                      <Transactions data={transactions ? transactions : []} isLoading={isLoadTrans}/>
                  </div>
              </div> :
              <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg mt-2" role="alert">
                  <p>Error loading "Transactions" data, please reload page</p>
              </div>
          }
      </Layout>
    )
}

export default App
