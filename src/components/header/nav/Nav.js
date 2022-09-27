import  { useState } from "react";
import Styles from "../../../styles/App.module.scss";
import logoNav from "../../../assets/logo.svg";
import logoMenu from "../../../assets/icon-hamburger.svg";
import DataJson from "../../../data/data.json";

const Nav = () => {
    const navbarData = DataJson.navbarComponent;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return(
        <nav className={Styles.nav}>
            <div className={Styles.nav_mobile}>
                <div className={Styles.nav_logo}>
                    <img src={logoNav} alt="logo sunnyside"/>
                </div>
                <div className={Styles.nav_menu_mobile}>
                    <button type="button" onClick={toggleMenu}><img src={logoMenu} alt="hamburger menu"/></button>
                </div>
            </div>
            <ul className={`${Styles.nav_list} ${isOpen ? Styles.nav_list_show : ""}`}>
                {navbarData.map((data, i) => {
                    return(
                        <li key={i}><a href={data.link}>{data.name}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;