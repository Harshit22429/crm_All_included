import Sidebar from "./components/Sidebar";
import CustomerFrom from "./components/CustomerForm";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Sidebar children={<MainContent />} />}
        ></Route>
        <Route path="/Form" element={<Sidebar children={<CustomerFrom />} />} />
      </Routes>

      {/* <Sidebar children={<MainContent />}></Sidebar> */}
      {/* <Sidebar children={<CustomerFrom />}></Sidebar> */}
    </div>
  );
};

export default App;
