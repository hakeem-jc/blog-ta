import { FC } from "react";
import './PostContainer.css';
import temp from '../../images/temp.jpg';
import fallback from '../../images/fallback.png';
import chevron_left from '../../images/chevron_left.png';
import chevron_right from '../../images/chevron_right.png';
import Button from "../Button/Button";

const PostContainer:FC = () => {
    return (
        <section className="post-container">
           <div 
                style={{
                        backgroundImage: `url(${temp}), url(${fallback})`
                }}
                className="post-container__carousel"
            >
                <button className="post-container__carousel_button">
                    <img src={chevron_left} alt="Left Chevron" className="post-container_image" />
                </button>

                <div className="post-container__content">
                    <h2 className="post-container__title">Berlin</h2>
                    <p className="post-container__text">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliq.</p>
                    <Button
                        text={"See More"}
                        type={"button"}
                        shape="square"
                    />
                    
                </div>

                <button className="post-container__carousel_button">
                    <img src={chevron_right} alt="Right Chevron" className="post-container_image" />
                </button>

           </div>
        </section>
    );
}

export default PostContainer;