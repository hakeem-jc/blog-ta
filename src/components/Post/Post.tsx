import { FC } from "react";
import './Post.css';
import fallback from '../../images/fallback.png';
import Button from "../Button/Button";
import { format_date } from "../../common/helpers";
import { useAppDispatch,useAppSelector } from "../../common/hooks";
import { setModalType, setIsOpen } from "../../features/modal/modalSlice";
import { setRefreshPosts } from "../../features/post/postSlice";
import { remove } from "../../api/remove";
import Map from "../Map/Map";

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

    let removeAndRefresh = (id: number) => {
        remove(id).then((_response) => {
          dispatch(setRefreshPosts(refresh_posts + 1));
          dispatch(setIsOpen(false));
        });
    };

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

           <Map lat={+current_post.lat} long={+current_post.long} />

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
                    onClick={() => removeAndRefresh(current_post.id)}
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