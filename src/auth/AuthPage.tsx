import { useState, useEffect } from "react";
import Login from "./login";
import API_URL from "../api/Api";

interface AuthPageProps {
  initialMethod: "login" | "register";
}

const AuthPage: React.FC<AuthPageProps> = ({ initialMethod }) => {
  const [method, setMethod] = useState<"login" | "register">(initialMethod);

  useEffect(() => {
    setMethod(initialMethod);
  }, [initialMethod]);

  const route =
    method === "login"
      ? `${API_URL}/api/token/`
      : `${API_URL}/user/register/`;

  return (
    <Login method={method} setMethod={setMethod} route={route} />
  );
};

export default AuthPage;
