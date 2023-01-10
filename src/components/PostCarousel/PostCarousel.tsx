import { FC, useState } from "react";
import './PostCarousel.css';
import post_fallback from '../../images/post_fallback.jpg';
import fallback from '../../images/fallback.png';
import chevron_left from '../../images/chevron_left.png';
import chevron_right from '../../images/chevron_right.png';
import Button from "../Button/Button";
import { useAppDispatch,useAppSelector } from "../../common/hooks";
import { setIsOpen,setModalType } from "../../features/modal/modalSlice";
import { show } from "../../api/show";
import { setFormType } from "../../features/form/formSlice";
import { FormType } from "../../interfaces/form_values";
import { setPost } from "../../features/post/postSlice";

const PostCarousel:FC = () => {
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(state => state);
    const [postCount, setPostCount] = useState(0);
    const postLength = posts.length;

    const openModal = async (id:number) => {
        let post = await show(id);
        dispatch(setFormType(FormType.UPDATE));
        dispatch(setModalType('view_post'));
        dispatch(setPost(post));
        dispatch(setIsOpen(true));
    }

    const nextPost = () => {
        if (postCount === (postLength - 1)) {
            setPostCount(0);
        } else {
            setPostCount(postCount + 1)
        }
    }

    const previousPost = () => {
        if (postCount === 0) {
            setPostCount(postLength - 1);
        } else {
            setPostCount(postCount-1);
        }
    }

    const fallBackPost =
    {
        "id": 1,
        "title": "Barcelona",
        "content": "Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits",
        "lat": "40.41678",
        "long": "-3.70379",
        "image_url": {post_fallback},
        "created_at": "2023-01-09T20:06:47.385Z",
        "updated_at": "2023-01-09T20:06:47.385Z"
    }

    let post_list = [fallBackPost];

    if (postLength > 0) {
        post_list = [...posts];
    }

    return (
        <div 
            style={{backgroundImage: `url(${post_list[postCount].image_url}), url(${fallback})`}}
            className="post_carousel"
        >
            <button className="post_carousel_button" onClick={()=>previousPost()}>
                <img src={chevron_left} alt="Left Chevron" className="post_carousel_image" />
            </button>

            <div className="post_carousel__content">
                <h2 className="post_carousel__title">{post_list[postCount].title}</h2>
                <p className="post_carousel__text">{post_list[postCount].content}</p>
                <Button
                    text={"See More"}
                    type={"button"}
                    shape="square"
                    onClick={()=>openModal(post_list[postCount].id)}
                />
                
            </div>

            <button className="post_carousel_button" onClick={()=>nextPost()}>
                <img src={chevron_right} alt="Right Chevron" className="post_carousel_image" />
            </button>

        </div>
    );
}

export default PostCarousel;