import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./Context/AuthContext";
import "./App.css";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
