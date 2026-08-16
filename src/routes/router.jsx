import { createBrowserRouter } from "react-router";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Employees from "../pages/Employees/Employees";
import AddEmployee from "../pages/AddEmployee/AddEmployee";
import Departments from "../pages/Departments/Departments";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayouts,
    children: [{ index: true, Component: Dashboard },
      { path: 'employee', Component: Employees },
      { path: 'addEmployee', Component: AddEmployee },
      { path: 'departments', Component: Departments },
      { path: 'profile', Component: Profile },
      { path: 'settings', Component: Settings },
      {path: 'login', Component: Login},
      {path: 'register', Component: Register}
    ], 
  },
]);
