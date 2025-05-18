import { tableData } from "../utils/tableData";

  const Table = ({filteredData}) => {
    return (
      <div className="mt-8 border border-[#80808066] rounded-lg overflow-x-auto">
        <table className="min-w-full table-fixed text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="py-4 px-6 font-semibold">Application ID</th>
              <th className="py-4 px-6 font-semibold">Date</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-[#1677FF] underline cursor-pointer">
                  {row.id}
                </td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      row.status === "Approved"
                        ? "text-green-600 border border-green-400 bg-green-100"
                        : "text-red-600 border border-red-400 bg-red-100"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="cursor-pointer">⋮</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  