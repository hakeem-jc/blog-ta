import { FC } from "react";
import './PostSummary.css';
import temp from '../../images/temp.jpg';
import fallback from '../../images/fallback.png';
import Button from "../Button/Button";

const PostSummary:FC = () => {
    let setDefaultImage = (ev: any) => {
        ev.target.src = fallback;
    };

    return (
        <div className="post-summary">
            <img
                src={temp}
                className="post-summary__image"
                onError={setDefaultImage}
                alt="Brief view of a post"
            /> 
            <h3 className="post-summary__title">Berlin</h3>
            <p className="post-summary__text">Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqu ....</p>

            <div className="post-summary__footer">
                <Button
                    text={"Update"}
                    type={"button"}
                    shape="square"
                />

                <p className="post-summary__date">Posted: 7/1/2023</p>
            </div>

        </div>
    );
}

export default PostSummary;