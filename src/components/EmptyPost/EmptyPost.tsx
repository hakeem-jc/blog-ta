import { FC } from "react";
import './EmptyPost.css';
import Button from "../Button/Button";

const EmptyPost:FC = () => {
    return (
        <section className="empty-post">
            <div className="empty-post__content">
                <h1 className="empty-post__title">Add a Post</h1>
                <Button
                    text={"+"}
                    type={"button"}
                    shape="circle"
                />
            </div>
        </section>
    );
}

export default EmptyPost;