import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex flex-row">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div className="flex-1 px-5 pt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/applications" element={<DashBoard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
