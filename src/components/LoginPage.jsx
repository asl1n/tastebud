import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './LoginForm.module.css';
import loginService from "../services/loginService";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const adminLogin = async (event) => {
    event.preventDefault();
    navigate('/dashboard');
    // const userDetail = { email: emailPhone, password: password };
    // console.log("Here--->", userDetail);

    // try {
    //   const response = await loginService.login(userDetail);
    //   if (response.status === 200) {
    //     console.log(response.data);
    //     // Navigate to the dashboard on successful login
    //     navigate('/dashboard');
    //   } else {
    //     console.log('Login failed');
    //   }
    // } catch (error) {
    //   console.error('Error logging in:', error);
    // }
  };

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Log in</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <label htmlFor="emailPhone" className={styles.inputLabel}>Email / Number</label>
              <input
                id="emailPhone"
                type="text"
                className={styles.inputField}
                placeholder="Enter your email/number"
                aria-label="Email or Phone Number"
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
              />
            </div>
            <div className={styles.passwordWrapper}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <div className={styles.passwordField}>
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Enter your password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b4734c28be8265f13fa1a4d50e36c7ba2d6b931b8c17c7d7d4ac1209a337a9?apiKey=556a066412f24cff924f0d1244f5cde7&&apiKey=556a066412f24cff924f0d1244f5cde7"
                  className={styles.visibilityIcon}
                  alt="Toggle visibility"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className={styles.rememberForgot}>
              <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="rememberMe" className={styles.checkbox} />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link to="/forgot-password" className={styles.forgotPassword}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className={styles.loginButton} onClick={adminLogin}>Log in</button>
        </form>
        <p className={styles.signupPrompt}>
          Not a member? <Link to="/sign-up" className={styles.signupLink}>Sign up</Link>
        </p>
      </section>
    </div>
  );
};

export default LoginForm;
