import { FC } from "react";
import './EmptyPost.css';
import Button from "../Button/Button";
import { setIsOpen,setModalType } from "../../features/modal/modalSlice";
import { useAppDispatch } from "../../common/hooks";
import { setFormType } from "../../features/form/formSlice";
import { EMPTY_POST } from "../../common/constants";
import { setPost } from "../../features/post/postSlice";
import { FormType } from "../../interfaces/form_values";

const EmptyPost:FC = () => {
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch(setIsOpen(true));
        dispatch(setPost(EMPTY_POST));
        dispatch(setFormType(FormType.NEW));
        dispatch(setModalType('new_post'));
    }

    return (
        <section className="empty-post">
            <div className="empty-post__content">
                <h1 className="empty-post__title">Add a Post</h1>
                <Button
                    text={"+"}
                    type={"button"}
                    shape="circle"
                    onClick={()=>openModal()}
                />
            </div>
        </section>
    );
}

export default EmptyPost;