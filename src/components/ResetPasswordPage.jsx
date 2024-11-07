import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const ResetPasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Reset Password</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.passwordWrapper}>
              <label htmlFor="newPassword" className={styles.inputLabel}>New Password</label>
              <div className={styles.passwordField}>
                <input
                  id="newPassword"
                  type={passwordVisible ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Enter your new password"
                  aria-label="New Password"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b4734c28be8265f13fa1a4d50e36c7ba2d6b931b8c17c7d7d4ac1209a337a9"
                  className={styles.visibilityIcon}
                  alt="Toggle visibility"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className={styles.passwordWrapper}>
              <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password</label>
              <div className={styles.passwordField}>
                <input
                  id="confirmPassword"
                  type={passwordVisible ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Confirm your password"
                  aria-label="Confirm Password"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b4734c28be8265f13fa1a4d50e36c7ba2d6b931b8c17c7d7d4ac1209a337a9"
                  className={styles.visibilityIcon}
                  alt="Toggle visibility"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Reset Password</button>
        </form>
        <p className={styles.signupPrompt}>
        Remember your password? <Link to="/login" className={`${styles.link} ${styles.signupLink}`}>Log in</Link>
        </p>
      </section>
    </div>
  );
};

export default ResetPasswordPage;
