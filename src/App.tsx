import './App.css'
import {Layout} from "./components/layout/Layout.tsx";
import {StatsCard} from "./components/dashboard/StatsCard.tsx";
import {useSalesData, useStats, useTransactions, useUsersData} from "./api/queries.ts";
import {SalesChart} from "./components/charts/SalesChart.tsx";
import {UserChart} from "./components/charts/UserChart.tsx";
import {Transactions} from "./components/dashboard/Transactions.tsx";

function App() {
    //TODO: add icons to cards
    const { data: stats} = useStats();
    //TODO add changeable days for below queries
    const { data: sales } = useSalesData(30);
    const { data: user } = useUsersData(30);
    const { data: transactions } = useTransactions(30)

    return (
      <Layout>
          <div className="grid grid-cols-4 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                  title="Revenue"
                  value={stats ? stats.revenue.toString() : ""}
                  change={stats ? stats.revenueChange : 0}
              />
              <StatsCard
                  title="Users"
                  value={stats ? stats.users.toString() : ""}
                  change={stats ? stats.usersChange : 0}
              />
              <StatsCard
                  title="Orders"
                  value={stats ? stats.orders.toString() : ""}
                  change={stats ? stats.ordersChange : 0}
              />
              <StatsCard
                  title="Rate"
                  value={stats ? stats.conversion.toString() : ""}
                  change={stats ? stats.conversionChange : 0}
              />
          </div>
          <div className="mt-2">
            <SalesChart data={sales ? sales : []} />
          </div>
          <div className="mt-2">
              <UserChart data={user ? user : []}/>
          </div>
          <div className="mt-2">
              <Transactions data={transactions ? transactions : []}/>
          </div>
      </Layout>
    )
}

export default App
