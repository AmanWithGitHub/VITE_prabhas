export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Top Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 text-lg">Total Sales</p>
          <h2 className="text-4xl font-bold text-blue-600">₹ 50,000</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 text-lg">Total Orders</p>
          <h2 className="text-4xl font-bold text-purple-600">120</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 text-lg">Inventory</p>
          <h2 className="text-4xl font-bold text-green-600">320 Items</h2>
        </div>
      </div>

      {/* Sales Graph */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Monthly Sales Overview</h2>
        <div className="border border-dashed rounded-xl h-64 flex items-center justify-center text-gray-500">
          Graph Placeholder
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">#001</td>
              <td className="p-3">Aman</td>
              <td className="p-3">₹ 1200</td>
              <td className="p-3 text-green-600 font-semibold">Paid</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">#002</td>
              <td className="p-3">Rohit</td>
              <td className="p-3">₹ 900</td>
              <td className="p-3 text-yellow-500 font-semibold">Pending</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">#003</td>
              <td className="p-3">Simran</td>
              <td className="p-3">₹ 2200</td>
              <td className="p-3 text-red-500 font-semibold">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
