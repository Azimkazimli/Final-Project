"use client";

import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  FormRegisterSchema,
  formLoginSchema,
} from "@/schema/FormRegisterSchema";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useUser } from "@/Components/UserContext";

const Auth = ({ mode }) => {
  const router = useRouter();
  const { loginUser } = useUser();

  const [personName, setPersonName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const API = "https://691ae3342d8d7855757091d4.mockapi.io/users";

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await FormRegisterSchema.validate(
        {
          name: personName,
          surname: surname,
          age: age,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        { abortEarly: false }
      );

      const { data: users } = await axios.get(API);
      const emailExists = users.some(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (emailExists) {
        setErrors({ email: "This email is already registered." });
        return;
      }

      const newUser = {
        fullName: personName,
        surname,
        age,
        email,
        password,
      };

      await axios.post(API, newUser);

      setAlert({
        open: true,
        type: "success",
        message: "Registration successful!",
      });

      setTimeout(() => {
        loginUser(newUser, true); // REGISTER ALWAYS REMEMBER
        setAlert({ open: false, type: "", message: "" });
        router.push("/");
      }, 2000);
    } catch (err) {
      if (err.inner) {
        let validationErrors = {};
        err.inner.forEach((e) => (validationErrors[e.path] = e.message));
        setErrors(validationErrors);
      } else {
        setAlert({
          open: true,
          type: "error",
          message: "Server error occurred.",
        });
        setTimeout(() => {
          setAlert({ open: false, type: "", message: "" });
        }, 2000);
      }
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await formLoginSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      const { data: users } = await axios.get(API);
      const foundUser = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (!foundUser) {
        setErrors({ email: "Email not found." });
        return;
      }

      if (foundUser.password !== password) {
        setErrors({ password: "Incorrect password." });
        return;
      }

      loginUser(foundUser, rememberMe);

      setAlert({
        open: true,
        type: "success",
        message: "Login successful!",
      });

      setTimeout(() => {
        setAlert({ open: false, type: "", message: "" });
        router.push("/");
      }, 1500);
    } catch (err) {
      if (err.inner) {
        let validationErrors = {};
        err.inner.forEach((e) => (validationErrors[e.path] = e.message));
        setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      {alert.open && (
        <div className="alert-toast">
          <Alert severity={alert.type}>
            <AlertTitle>
              {alert.type === "success"
                ? "Success"
                : alert.type === "error"
                ? "Error"
                : "Info"}
            </AlertTitle>
            {alert.message}
          </Alert>
        </div>
      )}

      <section className="auth-section">
        <div className="auth-container">
          <h2 className="auth-title">
            {mode === "register" ? "Register" : "Login"}
          </h2>

          <form
            className="auth-form"
            onSubmit={mode === "register" ? handleRegister : handleLogin}
          >
            {mode === "register" && (
              <>
                <div className="input-box">
                  <label>Name</label>
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="input-box">
                  <label>Surname</label>
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Enter your surname"
                  />
                  {errors.surname && <p className="error">{errors.surname}</p>}
                </div>

                <div className="input-box">
                  <label>Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => {
                      const val = e.target.value;

                      if (val === "") return setAge("");

                      const num = Number(val);

                      if (isNaN(num) || num < 1 || num > 120) return;

                      setAge(num);
                    }}
                    placeholder="Enter your age"
                  />
                  {errors.age && <p className="error">{errors.age}</p>}
                </div>
              </>
            )}

            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-box password-box">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />

                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {mode === "register" && (
              <div className="input-box password-box">
                <label>Confirm Password</label>

                <div className="password-wrapper">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                  />

                  <span
                    className="eye-icon"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* REMEMBER ME — only login */}
            {mode === "login" && (
              <div className="remember-me-box">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
            )}

            <button type="submit" className="auth-btn">
              {mode === "register" ? "Register" : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            {mode === "register" ? (
              <>
                Already have an account?
                <Link href="/login" className="auth-link">
                  Login
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?
                <Link href="/register" className="auth-link">
                  Register
                </Link>
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Auth;
