import { useState } from "react";
import Table from "../components/Table";
import { tableData } from "../utils/tableData";

const DashBoard = () => {
    const tabTypes  = ["All", "Approved", "Rejected"]
    const [tab, setTab] = useState(tabTypes[0]);

    const filteredData = tab === "All" ? tableData : tableData.filter((row) => row.status === tab)
    return (
        <div className="px-5 pt-8 w-full">
          <div className="flex gap-2 items-center">
            <div className="font-bold text-lg">Applications</div>
            <div className="px-2 py-1 text-sm items-center rounded-xl bg-[#FAAD1F] text-white">
              34 New
            </div>
          </div>
    
          <div className="flex gap-10 mt-14">
            {tabTypes.map((label) => (
              <div
                key={label}
                onClick={() => setTab(label)}
                className={`pb-2 cursor-pointer ${
                  tab === label
                    ? "text-[#1D77FF] border-b-2 border-[#1D77FF] font-medium"
                    : "text-gray-600"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
    
          <Table filteredData={filteredData} />
        </div>
      );
  };
  export default DashBoard;
  