import Sidebar from "./components/Sidebar";
import CustomerFrom from "./components/CustomerForm";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SingUp" element={<SignUp />} />
        <Route
          path="/Main"
          element={<Sidebar children={<MainContent />} />}
        ></Route>
        <Route path="/Form" element={<Sidebar children={<CustomerFrom />} />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dash" element={<Sidebar />}>
          <Route path="Main" element={<MainContent />} />
          <Route path="Form" element={<CustomerFrom />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
