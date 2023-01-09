import { FC } from "react";
import './Header.css';
import logo from "../../images/logo.png";
import Button from "../Button/Button";
import { useAppDispatch } from "../../common/hooks";
import { setIsOpen,setModalType } from "../../features/modal/modalSlice";
import { setFormType } from "../../features/form/formSlice";
import { EMPTY_POST } from "../../common/constants";
import { setPost } from "../../features/post/postSlice";
import { FormType } from "../../interfaces/form_values";

const Header:FC= () => {
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch(setIsOpen(true));
        dispatch(setPost(EMPTY_POST));
        dispatch(setFormType(FormType.NEW));
        dispatch(setModalType('new_post'));
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
                    dataTestid={'new_post_button'}
                    onClick={()=>openModal()}
                />
            </nav>
        </header>
    );
}

export default Header;