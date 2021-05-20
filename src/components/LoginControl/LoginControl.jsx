import React, { useState, useEffect } from "react";
const LoginControl = () => {
  const [isLogin, setIsLogIn] = useState(false);

  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};

export default LoginControl;
