import { FC } from "react";
import './PostSummary.css';
import fallback from '../../images/fallback.png';
import Button from "../Button/Button";
import { useAppDispatch } from "../../common/hooks";
import { setIsOpen,setModalType } from "../../features/modal/modalSlice";
import { PostProps } from "../../interfaces/post";
import { format_date } from "../../common/helpers";

const PostSummary:FC<PostProps> = (props) => {
    const dispatch = useAppDispatch();

    let created_at = format_date(props.created_at);

    const openModal = () => {
        dispatch(setIsOpen(true));
        dispatch(setModalType('view_post'));
    }

    let setDefaultImage = (ev: any) => {
        ev.target.src = fallback;
    };

    return (
        <div className="post-summary" data-testid={`post-${props.id}`}>
            <img
                src={props.image_url}
                className="post-summary__image"
                onError={setDefaultImage}
                alt="Brief view of a post"
            /> 
            <h3 className="post-summary__title">{props.title}</h3>
            <p className="post-summary__text">{props.content}</p>

            <div className="post-summary__footer">
                <Button
                    text={"View"}
                    type={"button"}
                    shape="square"
                    onClick={()=>openModal()}
                />

                <p className="post-summary__date">Posted: {created_at}</p>
            </div>

        </div>
    );
}

export default PostSummary;