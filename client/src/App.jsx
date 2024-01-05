import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalDetails from "./pages/PersonalDetails";
import ForBussiness from "./pages/ForBussiness";
import PersonalDetailsView from "./pages/PersonalDetailsView";
import ForBussinessView from "./pages/ForBussinessView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/personal-details" />} />
        <Route
          exact
          path="/personal-details"
          element={<PersonalDetails />}
        ></Route>
        <Route path="/for-bussiness" element={<ForBussiness />}></Route>
        <Route
          path="/personal-details-view"
          element={<PersonalDetailsView />}
        ></Route>
        <Route
          path="/for-bussiness-view"
          element={<ForBussinessView />}
        ></Route>
        <Route
          path="/personal-details/:id"
          element={<PersonalDetails />}
        ></Route>
        <Route path="/for-bussiness/:id" element={<ForBussiness />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
