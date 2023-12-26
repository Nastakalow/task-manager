import { useEffect } from "react";
import AdminLoginPageContainer from "../../containers/admin-login-page-container";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    if (user.token) {
      navigate("/dashboard");
    }
  }, []);

  return <AdminLoginPageContainer />;
}

export default AdminLoginPage;
