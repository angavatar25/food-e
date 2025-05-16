import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <GetStarted/> },
    { path: '/register', element: <Register/> },
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
