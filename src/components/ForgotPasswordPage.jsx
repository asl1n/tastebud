import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/reset-password'); // Redirect to Reset Password page
  };

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Forgot Password</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <label htmlFor="emailPhone" className={styles.inputLabel}>Email / Phone Number</label>
              <input
                id="emailPhone"
                type="text"
                className={styles.inputField}
                placeholder="Enter your email/number"
                aria-label="Email or Phone Number"
              />
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Send Code</button>
        </form>
        <p className={styles.signupPrompt}>
          Remember your password? <Link to="/login" className={`${styles.link} ${styles.signupLink}`}>Log in</Link>
        </p>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
