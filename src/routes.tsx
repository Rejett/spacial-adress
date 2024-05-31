import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import EarthAddress from "./pages/EarthAddress/EarthAddress";
import MarsAddress from "./pages/MarsAddress/MarsAddress";
import AddressList from "./pages/AddressList/AddressList";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";

export function AppRoutes() {
  const login = localStorage.getItem("login");
  return (
    <Routes>
      <Route path="/login" element={login ? <HomePage /> : <LoginPage />} />
      <Route path="/signup" element={login ? <HomePage /> : <SignupPage />} />
      <Route path="/" element={!login ? <LoginPage /> : <HomePage />}>
        <Route path="/address" element={<AddressList />} />
        <Route path="/create-earth-address" element={<EarthAddress />} />
        <Route path="/create-mars-address" element={<MarsAddress />} />
      </Route>
    </Routes>
  );
}
