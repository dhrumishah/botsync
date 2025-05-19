const TableItem = ({ row }) => {
  return (
    <tr key={row.id} className="border-t border-gray-200 hover:bg-gray-50">
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
  );
};
export default TableItem;
