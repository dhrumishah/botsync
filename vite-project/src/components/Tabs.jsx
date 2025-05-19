const Tabs = ({ tab, setTab, tabTypes }) => {
  return (
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
  );
};
export default Tabs;
