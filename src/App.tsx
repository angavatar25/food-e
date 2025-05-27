import { BrowserRouter as Router, useLocation, useRoutes } from "react-router-dom";

import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";
import PassRecovery from "./pages/PassRecovery";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";

import NavigationBar from "./components/NavigationBar";
import { AnimatePresence } from "framer-motion";

const isAuth = true;

const AppRouter = () => {
  const location = useLocation();

  let routesPath = [
    { path: '/', element: <GetStarted/> },
    { path: '/register', element: <Register/> },
    { path: '/pass-recovery', element: <PassRecovery/> },
    { path: '/reset-password', element: <ResetPassword/> },
    { path: '/login', element: <Login/> },
  ];

  if (isAuth) {
    routesPath = [
      { path: '/', element: <Home/> },
      { path: '/food-detail', element: <FoodDetail/> },
    ];
  }

  const routes = useRoutes(routesPath, location);

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>{routes}</div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="max-w-[500px] mx-auto bg-white">
      <Router>
        <AppRouter/>
        {isAuth ? (
          <div className="sticky bottom-0">
            <NavigationBar/>
          </div>
        ) : null}
      </Router>
    </div>
  );
}

export default App;
