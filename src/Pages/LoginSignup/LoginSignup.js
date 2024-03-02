import React, { useRef, useState } from "react";
import "./LoginSignup.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signupUser } from "../../store/userSlice";
import { Password } from "@mui/icons-material";
import { toast } from "react-toastify";

const LoginSignup = () => {
  // useRef
  const [page, setPage] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.users);
  const navigate = useNavigate();

  //   Functions

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  function handleLoginFunction(e) {
    e.preventDefault();
    const formData = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(loginUser(formData))
      .unwrap()
      .then((data) => {
        navigate("/");
        toast.success("User has been logged in!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  function handleSignUpFunction(e) {
    e.preventDefault();
    dispatch(signupUser(registerFormData))
      .unwrap()
      .then((data) => {
        setPage("login");
        toast.success("User has been registered!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <>
      <div className="loginSignupComponent">
        <div className="loginSignupBox">
          <div className="top-buttons">
            <p onClick={(e) => setPage("login")}>LOGIN</p>
            <p onClick={(e) => setPage("register")}>REGISTER</p>
          </div>
          {page === "login" && (
            <form className="loginForm" onSubmit={handleLoginFunction}>
              <div>
                <MailOutlineIcon />
                {/* Input for email with value and onChange handlers */}
                <input
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <LockOpenIcon />
                {/* Input for password with value and onChange handlers */}
                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <Link to="/password/forgot">Forgot Password?</Link>
              {/* Submit button */}
              <input type="submit" value="Login" className="loginSubmit" />
            </form>
          )}

          {/* ------------ */}
          {/* multipart/form-data=it is used when during submission we ara having an image */}
          {page === "register" && (
            <form
              className="loginForm"
              onSubmit={handleSignUpFunction}
              // encType="multipart/form-data"
            >
              <div>
                <FaceIcon />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={registerFormData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={registerFormData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={registerFormData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div id="registerImage">
                <img src="" alt="AvatarPreview" />
                <input type="file" name="avatar" accept="image/*" />
              </div>
              <input type="submit" value="Register" className="loginSubmit" />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
