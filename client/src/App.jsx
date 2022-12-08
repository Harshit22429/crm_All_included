import Sidebar from "./components/Sidebar";
import CustomerFrom from "./components/CustomerForm";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PersistLogin from "./components/PersistLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route element={<PersistLogin />}>
          <Route path="/Dash" element={<Sidebar />}>
            <Route path="Main" element={<MainContent />} />
            <Route path="Form" element={<CustomerFrom />} />
          </Route>
        </Route>
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
