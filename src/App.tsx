import { BrowserRouter as Router, } from "react-router-dom";
import { ProjectRoutes } from "./components/ProjectRoutes/Routes";


const App = () => (
  <Router>
    <ProjectRoutes />
  </Router>
)

export default App
