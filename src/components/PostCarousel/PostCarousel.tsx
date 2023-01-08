import { FC } from "react";
import './PostCarousel.css';
import temp from '../../images/temp.jpg';
import fallback from '../../images/fallback.png';
import chevron_left from '../../images/chevron_left.png';
import chevron_right from '../../images/chevron_right.png';
import Button from "../Button/Button";
import { useAppDispatch } from "../../common/hooks";
import { setIsOpen,setModalType } from "../../features/modal/modalSlice";

const PostCarousel:FC = () => {
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch(setIsOpen(true));
        dispatch(setModalType('view_post'));
    }

    return (
        <div 
            style={{
                    backgroundImage: `url(${temp}), url(${fallback})`
            }}
            className="post_carousel"
        >
            <button className="post_carousel_button">
                <img src={chevron_left} alt="Left Chevron" className="post_carousel_image" />
            </button>

            <div className="post_carousel__content">
                <h2 className="post_carousel__title">Berlin</h2>
                <p className="post_carousel__text">Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliq.</p>
                <Button
                    text={"See More"}
                    type={"button"}
                    shape="square"
                    onClick={()=>openModal()}
                />
                
            </div>

            <button className="post_carousel_button">
                <img src={chevron_right} alt="Right Chevron" className="post_carousel_image" />
            </button>

        </div>
    );
}

export default PostCarousel;