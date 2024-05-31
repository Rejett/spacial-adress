import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import EarthAddress from "./pages/EarthAddress/EarthAddress";
import MarsAddress from "./pages/MarsAddress/MarsAddress";
import AddressList from "./pages/AddressList/AddressList";
import EditMarsAddress from "./pages/EditMarsAddress/EditMarsAddress";
import EditEarthAddress from "./pages/EditEarthAddress/EditEarthAddress";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<AddressList />} />
        <Route path="/create-earth-address" element={<EarthAddress />} />
        <Route path="/create-mars-address" element={<MarsAddress />} />
        <Route path="/edit-earth-address" element={<EditEarthAddress />} />
        <Route path="/edit-mars-address" element={<EditMarsAddress />} />
      </Route>
    </Routes>
  );
}
