import { FC } from "react";
import './Header.css';
import logo from "../../images/logo.png";
import Button from "../Button/Button";
import { useAppDispatch } from "../../common/hooks";
import { setIsOpen } from "../../features/modal/modalSlice";


const Header:FC= () => {
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch(setIsOpen(true));
    }

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
                    onClick={()=>openModal()}
                />
            </nav>
        </header>
    );
}

export default Header;