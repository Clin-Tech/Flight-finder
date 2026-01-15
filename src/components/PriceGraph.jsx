import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PriceGraph = ({ data, flightCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Price Distribution ({flightCount} flights)
      </h2>

      {data.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-gray-400">
          No price data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="price"
              stroke="#6B7280"
              tickFormatter={(value) => `$${value}`}
            />
            <YAxis
              stroke="#6B7280"
              label={{ value: "Flights", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value) => [`${value} flights`, "Count"]}
              labelFormatter={(label) => `Price: $${label}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#4F46E5"
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
