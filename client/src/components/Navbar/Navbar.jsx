import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import btn from '../Button/Button.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../redux/guest/guest.slice.js";

import user from '../../assets/user.jpg';

export default function Navbar() {
  const dispatch = useDispatch()
  const {isLogin} = useSelector(state => state.user)
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link to="/">
          <svg
            width="74"
            height="66"
            viewBox="0 0 74 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6418 5.23141L18.7313 7.87603V33.2645L24.6418 35.3802V5.23141Z"
              fill="#0065C1"
            />
            <path
              d="M37 1L28.9403 4.17355L28.1304 35.3802L31.2609 37.129V53.8926H27.087V38.6774L17.6957 35.3802L14.5652 37.129V56.2258L10.913 57.7742V37.129L7.78261 40.7419V61.9005C20.3261 57.28 42.7738 53.8256 68.7015 63.3184V27.9752L53.6567 23.2149L48.2836 24.8017V54.9504H43.9851V25.8595L39.1493 27.9752V53.8926H37V25.8595L53.6567 20.0413V7.87603L37 1Z"
              fill="#0065C1"
            />
            <path
              d="M68.7015 63.3184V27.9752L53.6567 23.2149L48.2836 24.8017V54.9504H43.9851V25.8595L39.1493 27.9752V53.8926H37V25.8595L53.6567 20.0413V7.87603L37 1L28.9403 4.17355L28.1304 35.3802L31.2609 37.129V53.8926H27.087V38.6774L17.6957 35.3802L14.5652 37.129V56.2258L10.913 57.7742V37.129L7.78261 40.7419V61.9005M1 65C2.73369 63.9943 5.0175 62.9191 7.78261 61.9005M73 65C45.2671 53.45 21.0143 57.0265 7.78261 61.9005M18.7313 7.87603L24.6418 5.23141V35.3802L18.7313 33.2645V7.87603Z"
              stroke="#0065C1"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <nav className={style.nav__links}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(data) => (data.isActive ? style.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={(data) => (data.isActive ? style.active : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/property"
              className={(data) => (data.isActive ? style.active : "")}
            >
              Property
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={(data) => (data.isActive ? style.active : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={(data) => (data.isActive ? style.active : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.left__side}>
        {!isLogin ? <div className={style.sign}>
              <button className={`${btn.btn} ${btn.secondary}`} onClick={()=> dispatch(toggleModal('login'))}>Login</button>
              <button className={`${btn.btn} ${btn.primary}`} onClick={()=> dispatch(toggleModal('signup'))}>Sign up</button>
            </div> :
            <div className={style.user_profiel}>
              <img src={user} alt="user_profiel"/>
            </div>
        }
      </div>
    </div>
  );
}
