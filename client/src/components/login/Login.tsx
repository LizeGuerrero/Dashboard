import { useState } from "react";
import "./Login.scss";
import '../../App.scss';
import { Link } from "react-router-dom";
import Axios from "axios";

/* Importar nuestros assets */
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

/* Importar nuestros Iconos*/
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {

  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  //Onclick para el boton de register
  const loginUser = () => {

    Axios.post('http://localhost:3001/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
  }).then((response) => {
    console.log(response);
  })
  }

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature !</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account ?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid">
            <span className="Message">Login Status will go here</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                {/* En este momento se intalan los icons con el comando npm i react-icons */}
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" onChange={(event) => setLoginUserName(event.target.value)}/>
              </div>
            </div>

            {/* Copiamos lo del usuario y hacemos el password modificano donde dice username por password */}
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password" onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;