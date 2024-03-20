import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import NotificationModal from "./NotificationModal";
import axios from "axios";
import Header from "../../Header&Footer/Header/Header";
import Footer from "../../Header&Footer/Footer/Footer";
import Notification from "../../Home/Notification/Nontification";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  // useEffect(() => {
  //     const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
  //     if (storedLoggedInStatus === "true") {
  //         setIsLoggedIn(true);
  //     }
  // }, []);
  // useEffect(() => {
  //     if (isLoggedIn) {
  //         sessionStorage.setItem('isLoggedIn', 'true');
  //     }
  // }, [isLoggedIn]);

  //LOGIN//
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        username: User,
        password: Password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        document.cookie = `token=${token}; path=/; secure;`;
        // localStorage.setItem("isLoggedIn", "true");
        // setIsLoggedIn(true);
        alert("Đăng nhập thành công");
        window.scrollTo(0, 0);
        navigate("/ProfileCHA");
        return;
      }

      setIsLoggedIn(false);
      alert("Đăng nhập thất bại");
    } catch (error) {
      console.error("Error querying the database:", error);
      setIsLoggedIn(false);
      alert("Đăng nhập thất bại");
    }
  };

  window.addEventListener('beforeunload', function(event) {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  });

  //SIGNUP//
  const handleSignup = async (event) => {
    event.preventDefault();
    if (username === "admin") {
      alert("Không được đăng kí với username=admin");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        username,
        fullname,
        email,
        password,
        phone,
      });

      console.log("Signup successful:", response.data);
      alert("Đăng kí thành công");
      handleLoginClick();
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Người dùng đã tồn tại ", error);
    }
  };
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleLoginClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <>
      <div className="bg-[#263238]">
        <Header />
        <div className="bg-[#253238] flex  justify-center">
          <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px] rounded">
            <Notification />

            <div className=" flex items-center justify-center bg-[#263238]">
              <div
                className={`container ${
                  isSignUpActive ? "right-panel-active" : ""
                }`}
              >
                <div className="form-container sign-up-container ">
                  <form
                    action="#"
                    className="bg-white flex items-center justify-center flex-col px-[50px] h-full text-center"
                  >
                    <h1 className="font-bold m-0">Create Account</h1>
                    <div className="social-container">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.fb}`}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.gg}`}
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.lk}`}
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <span className="text-[15px] mb-[10px]">
                      or use your email for registration
                    </span>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={fullname}
                      className="inputUser"
                      placeholder="Tên đầy đủ"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      className="inputUser"
                      placeholder="Tên tài khoản"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      className="inputUser"
                      placeholder="Mật khẩu"
                      onChange={(e) => setpassword(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      className="inputUser"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      className="inputUser"
                      placeholder="Số điện thoại"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <button
                      onClick={handleSignup}
                      className="rounded-full border border-solid border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform duration-80 ease-in"
                    >
                      Đăng ký
                    </button>
                  </form>
                </div>
                <div className="form-container sign-in-container">
                  <form
                    action="#"
                    className="bg-white flex items-center justify-center flex-col px-[50px] h-full text-center"
                  >
                    <h1 className="font-bold m-0">Sign in</h1>
                    <div className="social-container">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.fb}`}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.gg}`}
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className={`social ${styles.lk}`}
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <span className="text-[15px] mb-[10px]">
                      or use your account
                    </span>
                    <input
                      type="text"
                      id="username"
                      value={User}
                      onChange={handleUserChange}
                      placeholder="Tên đăng nhập"
                      className="inputUser border-gray-300 text-black"
                    />
                    <input
                      type="password"
                      id="password"
                      value={Password}
                      onChange={handlePasswordChange}
                      placeholder="Mật khẩu"
                      className="inputUser border-gray-300 text-black"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className="mb-[10px]"
                    >
                      Forgot your password?
                    </a>
                    <button
                      onClick={handleLogin}
                      className="rounded-full border border-solid border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform duration-80 ease-in"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1 className="font-bold m-0">Welcome Back!</h1>
                      <p className="text-sm font-light leading-5 tracking-wider my-20">
                        To keep connected with us please login with your
                        personal info
                      </p>
                      <button
                        className=" bg-red-500 border-white text-white font-bold text-xs uppercase py-3 px-12 rounded-full border border-solid  transition-transform duration-80 ease-in focus:outline-none active:scale-95"
                        onClick={handleLoginClick}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1 className="font-bold m-0">Hello, Friend!</h1>
                      <p className="text-sm font-light leading-5 tracking-wider my-20">
                        Enter your personal details and start journey with us
                      </p>
                      <button
                        className=" bg-red-500 border-white text-white font-bold text-xs uppercase py-3 px-12 rounded-full border border-solid  transition-transform duration-80 ease-in focus:outline-none active:scale-95"
                        onClick={handleSignUpClick}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:mt-[20px] flex justify-center ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
