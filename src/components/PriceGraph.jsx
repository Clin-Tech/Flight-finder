import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const PriceGraph = ({ data, flightCount }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-midnight-50 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-midnight-700" />
        </div>
        <div>
          <h2 className="font-display font-bold text-midnight-900">
            Price Distribution
          </h2>
          <p className="text-sm text-gray-400">
            {flightCount} flight{flightCount !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-gray-300 text-sm">
          No price data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="price"
              stroke="#94a3b8"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
              fontFamily="DM Sans"
            />
            <YAxis
              stroke="#94a3b8"
              fontSize={12}
              fontFamily="DM Sans"
              label={{
                value: "Flights",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "#94a3b8", fontFamily: "DM Sans" },
              }}
            />
            <Tooltip
              formatter={(value) => [`${value} flights`, "Count"]}
              labelFormatter={(label) => `Price: $${label}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontFamily: "DM Sans",
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1e3a5f"
              strokeWidth={2}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PriceGraph;
