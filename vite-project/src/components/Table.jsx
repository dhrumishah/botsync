import TableItem from "./TableItem";

  const Table = ({filteredData}) => {
    return (
      <div className="mt-8 border border-[#80808066] w-full rounded-lg overflow-x-auto">
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
              <TableItem row={row} key={row.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  