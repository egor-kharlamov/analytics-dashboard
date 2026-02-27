import './App.css'
import {Layout} from "./components/layout/Layout.tsx";
import {StatsCard} from "./components/dashboard/StatsCard.tsx";
import {useStats} from "./api/queries.ts";

function App() {
    const { data: stats} = useStats();
    //TODO: add icons to cards
    return (
      <Layout>
          <div className="grid grid-cols-4 gap-8">
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
      </Layout>
  )
}

export default App
