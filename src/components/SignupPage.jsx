import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';


const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  const adminSignup = async (event) => {
    event.preventDefault();

    const userDetail = { firstname:firstName, lastName:lastName,email: email, password: password, phone: "98188271"}
    console.log("Here--->", userDetail);

    await signupService.login(userDetail).then((response) => {
      if(response.status === 200) {
        console.log(response.data)
      }
    })
  }
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Sign up</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
              <input
                id="firstName"
                type="text"
                className={styles.inputField}
                placeholder="Enter your first name"
                aria-label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
              <input
                id="lastName"
                type="text"
                className={styles.inputField}
                placeholder="Enter your last name"
                aria-label="Last Name"
                onChange={(e) => setLastName(e.target.value)}

              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="emailPhone" className={styles.inputLabel}>Email / Phone Number</label>
              <input
                id="email"
                type="text"
                className={styles.inputField}
                placeholder="Enter your email/number"
                aria-label="Email or Phone Number"
                onChange={(e) => setEmail(e.target.value)}

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
                  onChange={(e)=> setPassword(e.target.value)}
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
          <button className={styles.loginButton} onclick={adminSignup}>Sign up</button>
        </form>
        <p className={styles.signupPrompt}>
          Already have an account? <Link to="/login" className={`${styles.link} ${styles.signupLink}`}>Log in</Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;
