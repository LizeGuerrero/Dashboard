import "../login/Login.scss";
import '../../App.scss';
import { Link, NavLink } from "react-router-dom";

/* Importar nuestros assets */
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

/* Importar nuestros Iconos*/
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead  } from "react-icons/md";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature !</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account ?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let's Get Started</h3>
          </div>

          <form action="" className="form grid">

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                {/* En este momento se intalan los icons con el comando npm i react-icons */}
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
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
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;