import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
