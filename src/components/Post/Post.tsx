import { FC } from "react";
import './Post.css';
import fallback from '../../images/fallback.png';
import map from '../../images/map.png';
import Button from "../Button/Button";
import { format_date } from "../../common/helpers";
import { useAppDispatch,useAppSelector } from "../../common/hooks";
import { setFormType } from "../../features/form/formSlice";
import { setIsOpen, setModalType } from "../../features/modal/modalSlice";
import { setRefreshPosts } from "../../features/post/postSlice";

const Post:FC = () => {
    const dispatch = useAppDispatch();
    const { current_post, refresh_posts } = useAppSelector(state => state);

    let setDefaultImage = (ev: any) => {
        ev.target.src = fallback;
    };

    let created_at = format_date(current_post.created_at);
    let updated_at = format_date(current_post.updated_at);

    const openUpdateModal = () => {
        dispatch(setModalType('new_post'));
        dispatch(setRefreshPosts(refresh_posts + 1));
    }

    return (
        <div className="post">
            <img
                src={current_post.image_url}
                className="post__image"
                onError={setDefaultImage}
                alt="Brief view of a post"
            /> 
            <h3 className="post__title">{current_post.title}</h3>
            <p className="post__text">{current_post.content}</p>

            <h3 className="post__title">Location</h3>

            {/* TODO - Put Map here */}
            <img
                src={map}
                className="post__image post_map"
                onError={setDefaultImage}
                alt="Brief view of a post"
            /> 

            <div className="post__footer">
                <Button
                    text={"Update"}
                    type={"button"}
                    shape="square"
                    onClick={()=>openUpdateModal()}
                />

                <Button
                    text={"Delete"}
                    type={"button"}
                    color="red"
                    shape="square"
                />
            </div>


            <div className="post__footer">
                <p className="post__date">Posted: {created_at}</p>
                <p className="post__date">Updated: {updated_at}</p>
            </div>

        </div>
    );
}

export default Post;