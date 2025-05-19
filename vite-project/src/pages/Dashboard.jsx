import { useState } from "react";
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import { tableData } from "../utils/tableData";
import { FaRegPenToSquare } from "react-icons/fa6";

const DashBoard = () => {
  const tabTypes = ["All", "Approved", "Rejected"];
  const [tab, setTab] = useState(tabTypes[0]);

  const filteredData =
    tab === "All" ? tableData : tableData.filter((row) => row.status === tab);
  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <FaRegPenToSquare />
        <div className="font-bold text-lg">Applications</div>
        <div className="px-2 py-1 text-sm items-center rounded-xl bg-[#FAAD1F] text-white">
          34 New
        </div>
      </div>

      <Tabs tab={tab} setTab={setTab} tabTypes={tabTypes} />
      <Table filteredData={filteredData} />
    </div>
  );
};
export default DashBoard;
