import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidForm, SetInvalidForm] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validateForm = () => {
      const regexEmail = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/g;
      const validEmail = email.match(regexEmail) !== null;
      const minPasswordLength = 6;
      const validPassword = password.length >= minPasswordLength;
      SetInvalidForm(!(validEmail && validPassword));
    };
    validateForm();
  }, [email, password]);

  return(
    <form>
      <label htmlFor="email-input">
        <input
          type="text"
          id="email-input" 
          name="email-input"
          placeholder="Email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          id="password-input"
          name="password-input"
          placeholder="Password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
      </label>
      <label htmlFor="login-btn">
        <button
          type="button"
          id="login-btn"
          name="login-btn"
          disabled={invalidForm}
          onClick={() => navigate("/albuns")}
        >
          Login
        </button>
      </label>
    </form>
  );
}

export default Login;