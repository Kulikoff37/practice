import { Routes, Route } from "react-router-dom";
import { Guest } from "../../pages/Guest";
import { NoMatch } from "../../pages/NoMatch";
import SiteLayout from "../Layout";
import { PROJECT_NAME } from "../../constants/main";
import Login from "../../pages/Login";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout header={<span>{PROJECT_NAME}</span>}/>}>
        <Route index element={<Login />} />
        <Route path="guest" element={<Guest />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}



