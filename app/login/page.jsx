import React from "react";
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "@/app/ui/login/loginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
