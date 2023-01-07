import { FC } from "react";
import './Post.css';
import temp from '../../images/temp.jpg';
import fallback from '../../images/fallback.png';
import map from '../../images/map.png';
import Button from "../Button/Button";

const Post:FC = () => {
    let setDefaultImage = (ev: any) => {
        ev.target.src = fallback;
    };

    return (
        <div className="post">
            <img
                src={temp}
                className="post__image"
                onError={setDefaultImage}
                alt="Brief view of a post"
            /> 
            <h3 className="post__title">Berlin</h3>
            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqu ....</p>

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
                />

                <Button
                    text={"Delete"}
                    type={"button"}
                    color="red"
                    shape="square"
                />
            </div>


            <div className="post__footer">
                <p className="post__date">Posted: 7/1/2023</p>
                <p className="post__date">Updated: 7/1/2023</p>
            </div>

        </div>
    );
}

export default Post;