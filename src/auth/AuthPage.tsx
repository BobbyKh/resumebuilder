import { useState, useEffect } from "react";
import Login from "./login";

interface AuthPageProps {
  initialMethod: "login" | "register";
}

const AuthPage: React.FC<AuthPageProps> = ({ initialMethod }) => {
  const [method, setMethod] = useState(initialMethod);

  useEffect(() => {
    setMethod(initialMethod);
  }, [initialMethod]);

  const route =
    method === "login"
      ? "http://127.0.0.1:8000/api/token/"
      : "http://127.0.0.1:8000/user/register/";

  return (
    <div>
      <Login method={method} setMethod={setMethod} route={route} />
    </div>
  );
};

export default AuthPage;
