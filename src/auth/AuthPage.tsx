import { useState, useEffect } from "react";
import Login from "./login";

const AuthPage = ({ initialMethod }: { initialMethod: string }) => {
  const [method, setMethod] = useState(initialMethod);

  useEffect(() => {
    setMethod(initialMethod);
  }, [initialMethod]);

  const route = method === "login" ? "http://127.0.0.1:8000/api/token/" : "http://127.0.0.1:8000/user/register/";


    
  return (
    <div className="">
      <Login method={method} setMethod={setMethod} route={route} />
    </div>
  );
};

export default AuthPage;

