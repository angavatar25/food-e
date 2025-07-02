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
import SearchFood from "./pages/SearchFood";
import Basket from "./pages/Basket";
import Liked from "./pages/Liked";
import Checkout from "./pages/Checkout";

import { useAuth } from "./provider/AuthProvider";
import Profile from "./pages/Profile";

const isAuth = false;

const AppRouter = () => {
  const location = useLocation();

  const { user } = useAuth();

  let routesPath = [
    { path: '/', element: <GetStarted/> },
    { path: '/register', element: <Register/> },
    { path: '/pass-recovery', element: <PassRecovery/> },
    { path: '/reset-password', element: <ResetPassword/> },
    { path: '/login', element: <Login/> },
  ];

  if (user) {
    routesPath = [
      { path: '/home', element: <Home/> },
      { path: '/search', element: <SearchFood/> },
      { path: '/food-detail', element: <FoodDetail/> },
      { path: '/cart', element: <Basket/> },
      { path: '/liked', element: <Liked/> },
      { path: '/checkout', element: <Checkout/> },
      { path: '/profile', element: <Profile/> },
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
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="max-w-[500px] mx-auto bg-white">
      <Router>
        <AppRouter/>
        {user ? (
          <div className="sticky bottom-0">
            <NavigationBar/>
          </div>
        ) : null}
      </Router>
    </div>
  );
}

export default App;
