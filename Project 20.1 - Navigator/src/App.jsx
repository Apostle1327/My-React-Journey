import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import "./App.css";

import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import HomePage from "./Components/HomePage";
import Missing from "./Components/Missing";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
