import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageContainer from "../../containers/login-page-container";

function AdminLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    if (user.token) {
      navigate("/admin/dashboard");
    }
  }, []);

  return <LoginPageContainer role={"admin"} />;
}

export default AdminLoginPage;
