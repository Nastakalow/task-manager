import { Outlet } from "react-router-dom";
import RoleSelector from "../../components/role-selector";

function AuthLayout() {
  return (
    <>
      <RoleSelector />
      <Outlet />
    </>
  );
}

export default AuthLayout;
