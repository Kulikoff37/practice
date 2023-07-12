import { Routes, Route } from "react-router-dom";
import Guest from "../../pages/Guest";
import { NoMatch } from "../../pages/NoMatch";
import SiteLayout from "../Layout";
import { PROJECT_NAME } from "../../constants/main";
import Login from "../../pages/Login";
import Footer from "../Footer";
import Admin from "../../pages/Admin";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout header={<span>{PROJECT_NAME}</span>} />}>
        <Route index element={<Login />} />
        <Route path="guest" element={<><Guest /><Footer /></>} />
        <Route path="admin" element={<Admin></Admin>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}



