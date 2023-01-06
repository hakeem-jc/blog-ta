import { FC } from "react";
import './Header.css';
import logo from "../../images/logo.png";
import Button from "../Button/Button";

const Header:FC= () => {
    return (
        <header className="header">
            
            <div className="header__logo_container">
                <img src={logo} className="header__logo" alt="Logo"/>
                <h2 className="header__title">blogr</h2>
            </div>
              
            <nav className="header__nav">
                <Button
                    text={"Post"}
                    type={"button"}
                    shape="square"
                />
            </nav>
            

        </header>
    );
}

export default Header;